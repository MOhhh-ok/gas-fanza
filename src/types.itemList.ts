export interface ItemListParams {
  api_id: string;
  affiliate_id: string;
  site: 'DMM.com' | 'FANZA';
  service?: string;
  floor?: string;
  hits?: number;
  offset?: number;
  sort?: 'rank' | 'price' | '-price' | 'date' | 'review' | 'match';
  keyword?: string;
  cid?: string;
  article?: string | string[];
  article_id?: string | string[];
  gte_date?: string;
  lte_date?: string;
  mono_stock?: 'stock' | 'reserve' | 'reserve_empty' | 'mono' | 'dmp';
  output?: 'json' | 'xml';
  callback?: string;
}

export type ItemListParamsWithoutKeys = Omit<
  ItemListParams,
  'api_id' | 'affiliate_id'
>;

export interface ItemListResponse {
  request: {
    parameters: {
      parameter: {
        name: string;
        value: string;
      }[];
    };
  };
  result: {
    status: number;
    result_count: number;
    total_count: number;
    first_position: number;
    items: {
      service_code: string;
      service_name: string;
      floor_code: string;
      floor_name: string;
      category_name: string;
      content_id: string;
      product_id: string;
      title: string;
      volume: number;
      number: number;
      review: {
        count: number;
        average: number;
      };
      URL: string;
      affiliateURL: string;
      imageURL: {
        list: string;
        small: string;
        large: string;
      };
      tachiyomi?: {
        URL: string;
        affilaiteURL: string;
      };
      sampleImageURL: {
        sample_s: {
          image: string[];
        };
        sample_l: {
          image: string[];
        };
      };
      sampleMovieURL?: {
        size_476_306: string;
        size_560_360: string;
        size_644_414: string;
        size_720_480: string;
        pc_flag: 0 | 1;
        sp_flag: 0 | 1;
      };
      prices: {
        price: string;
        list_price?: string;
        deliveries: {
          delivery: {
            type: string;
            price: number;
          }[];
        };
      };
      date: string;
      iteminfo: {
        genre?: {
          name: string;
          id: string;
        }[];
        series?: {
          name: string;
          id: string;
        }[];
        maker?: {
          name: string;
          id: string;
        }[];
        actor?: {
          name: string;
          id: string;
        }[];
        actress?: {
          name: string;
          id: string;
        }[];
        director?: {
          name: string;
          id: string;
        }[];
        author?: {
          name: string;
          id: string;
        }[];
        label?: {
          name: string;
          id: string;
        }[];
        type?: {
          name: string;
          id: string;
        }[];
        color?: {
          name: string;
          id: string;
        }[];
        size?: {
          name: string;
          id: string;
        }[];
      };
      cdinfo?: {
        kind: string;
      };
      jancode?: string;
      maker_product?: string;
      isbn?: string;
      stock?: string;
      directory?: {
        id: string;
        name: string;
      }[];
      campaign?: {
        date_begin: string;
        date_end: string;
        title: string;
      };
    }[];
  };
}
