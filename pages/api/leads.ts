import { leadsData } from '@/lib/constant';
import { NextApiRequest, NextApiResponse } from 'next';

interface Lead {
    id: number;
    name: string;
    location: string;
    assignedOn: number;
    leadType: string;
    tab: string;
}

const filterLeads = (
    leads: Lead[],
    search?: string,
    leadType?: string,
    location?: string,
    activeTab?: string,
    startDate?: string,
    endDate?: string
) => {
    let filteredLeads = leads;

    if (search) {
        filteredLeads = filteredLeads.filter((lead) =>
            lead.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (leadType) {
        filteredLeads = filteredLeads.filter((lead) => lead.leadType === leadType);
    }

    if (location) {
        filteredLeads = filteredLeads.filter((lead) =>
            lead.location.toLowerCase().includes(location.toLowerCase())
        );
    }

    if (activeTab) {
        filteredLeads = filteredLeads.filter((lead) => {
            if (activeTab === "All Leads") {
                return true;
            }

            return lead.tab === activeTab;
        });
    }

    // Date range filtering (Ensure startDate and endDate are parsed as numbers)
    if (startDate && endDate) {
        const start = Number(startDate);
        const end = Number(endDate);

        if (!isNaN(start) && !isNaN(end)) {
            filteredLeads = filteredLeads.filter((lead) => {
                const assignedDate = lead.assignedOn; // Already a number (Unix timestamp)
                return assignedDate >= start && assignedDate <= end;
            });
        }
    }

    return filteredLeads;
};

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    const { method, query } = req;

    if (method === "GET") {
        const { search, page, limit, leadType, location, activeTab, startDate, endDate } = query;

        const currentPage = Number(page) || 1;
        const leadsPerPage = Number(limit) || 10;

        // Filter and paginate leads
        const filteredLeads = filterLeads(
            leadsData,
            search as string,
            leadType as string,
            location as string,
            activeTab as string,
            startDate as string,
            endDate as string
        );

        const totalRecords = filteredLeads.length;
        const totalPages = Math.ceil(totalRecords / leadsPerPage);
        const startIndex = (currentPage - 1) * leadsPerPage;
        const paginatedLeads = filteredLeads.slice(startIndex, startIndex + leadsPerPage);

        const meta = {
            totalRecords,
            currentPage,
            totalPages,
        };

        res.status(200).json({ leads: paginatedLeads, meta });
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
