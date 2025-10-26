import { BugStatus } from "./bug-status.model";

export interface Bug {
    id: number; 
    description: string; 
    createdAt: string;
    status: BugStatus;
    reportedByUser: string; 
    assignedToUser: string; 
}