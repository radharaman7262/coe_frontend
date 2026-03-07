export interface CaseHistoryItemType  {
  id: string;
  name: string;
  tableName: string | null;
  priority: number;
  parentId: string | null;
  children: CaseHistoryItemType[];
  percentage: number;
};

export type CaseHistoryResponse = CaseHistoryItemType[];