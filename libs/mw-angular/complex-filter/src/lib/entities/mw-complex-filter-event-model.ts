export const enum MwComplexFilterEventType {
  HideFilter = 'HIDE_FILTER',
  ShowFilter = 'SHOW_FILTER',
  ResetFilters = 'RESET_FILTERS',
}

export interface MwComplexFilterEventModel {
  eventType: MwComplexFilterEventType;
  data: { [key: string]: any };
}
