export interface CollectionModel {
  id: number;
  target: string;
  description?: string;
  avatar?: string;
  chart?: CollectionChartModel;
}

export interface CollectionChartModel {
  data: CollectionChartDataModel[];
}

export interface CollectionChartDataModel {
  name: string;
  min: number;
  max: number;
  value: number;
}
