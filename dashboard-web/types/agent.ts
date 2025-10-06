import { Feature, Price } from "@/types/pricing";

export interface Agent {
    name?: string;
    install_count?: number;
    installed?: boolean | null | undefined;
    installation?: {
      id: string;
    };
    _cr?: string;
    _up?: string;
    id?: string;
    visibility?: string;
    workspace_id?: string;
    creator_id?: string;
    avatar_url?: string | null | undefined;
    headline?: string | null | undefined;
    creator?: {
      name?: string;
      id?: string;
      picture?: string;
    }
    enabled?: boolean;
    run_count?: number;
    can_edit?: boolean;
    runtime?: {
      dev_status?: string | null | undefined;
    }
  }

  export enum PricingModel {
    Utilization = 'UTILIZATION',
    Subscription = 'SUBSCRIPTION'
  }

  export interface SubscriptionOption {
    id: string;
    name: string;
    description: string;
    price_list: Price[];
    feature_list: Feature[];
    default_price_id: string;
    trial_period_days: number;
  }

  // Define an interface for your form data
export interface BannerFile {
  id: string;
  url: string;
  original_name: string;
  file_type: 'file' | 'image/png' | 'image/jpeg' | 'image/jpg' | 'image/gif' | 'image/webp' | 'pdf' | 'excel' | 'word' | 'video/mp4' | 'video/webm' | 'video/ogg' | 'video/avi' | 'video/mov' | 'video/wmv' | 'video/flv' | 'video/mkv';
  primary?: boolean;
  file_size?: number;
  is_primary?: boolean;
}

  export interface AgentParams {
    can_edit?: boolean;
    id?: string;
    name?: string;
    visibility?: string;
    headline?: string;
    description?: object;
    enabled?: boolean;
    avatar_file?: File | null;
    pricing_model?: PricingModel;
    subscription_options?: SubscriptionOption[];
    utilization_price?: number;
    banner_files?: BannerFile[];
  }
