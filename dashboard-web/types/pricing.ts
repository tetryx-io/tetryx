export type FeatureType = 'text' | 'number' | 'boolean';

export interface Feature {
  name: string;
  type: FeatureType;
  value?: number | boolean;
  quantity?: number;
  is_offered?: boolean;
}
  
export interface Entitlement {
    featureId: string;
    tier: 'Basic' | 'Pro' | 'Enterprise';
    limit?: number;
  }
  
export interface PricingFrequency {
    id: 'monthly' | 'yearly' | 'quarterly';
    name: string;
    monthsIncluded: number;
    discountPercentage: number;
  }

export interface Price {
  id?: string;
  unit_amount: number;
  interval: 'month' | 'year';
  interval_count: number;
  currency: string;
  default?: boolean;
}
  
export interface NewPricingOption {
  id?: string;
  name: string;
  description: string;
  feature_list: Feature[];
  price_list: Price[];
  default_price_id?: string;
  trial_period_days?: number;
}
