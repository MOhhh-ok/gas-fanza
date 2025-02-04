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

  getItemList(params: ItemListParamsWithoutKeys) {
    const cmbParams: ItemListParams = {
      api_id: this.params.appId,
      affiliate_id: this.params.affiliateId,
      ...params,
    };
    const url = `${baseUrl}/ItemList?${this.generateGetParams(cmbParams)}`;
    const response = UrlFetchApp.fetch(url);
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
