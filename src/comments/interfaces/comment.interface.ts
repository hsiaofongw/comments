import { IVisitor } from '../../visitors/interfaces/visitor.interface';

export interface IComment {
    uuid: string;              
    replyTo: string;           
    from: IVisitor;             
    at: number;                 
    says: string;               
    uuidOfReplies: string[];    
    approved?: boolean;
}
