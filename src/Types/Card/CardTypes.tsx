

export interface CardNewProps {
  dados: Array<{
    _id: string;
    title: string;
    content: string;
    column: string
    
    
  }>;
  handleDelete: (id: string) => void;
  handleMove: (id: string, newColumn: string) => void;
  getData: () => Promise <void>;
  
}