import {
  ItemListParams,
  ItemListParamsWithoutKeys,
  ItemListResponse,
} from './types.itemList';

const baseUrl = 'https://api.dmm.com/affiliate/v3';

export class FanzaClient {
  constructor(
    private readonly params: {
      appId: string;
      affiliateId: string;
    }
  ) {
    this.params = params;
  }

  async getItemList(params: ItemListParamsWithoutKeys) {
    const response = UrlFetchApp.fetch(
      `${baseUrl}/ItemList?${this.generateGetParams({
        ...this.params,
        ...params,
      })}`
    );
    const txt = response.getContentText();
    const data = JSON.parse(txt) as ItemListResponse;
    return data;
  }

  private generateGetParams(params: Record<string, any>) {
    return Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
      .join('&');
  }
}
