import { withDatasourceCheck } from '@sitecore-content-sdk/nextjs';
import { HeroBanner, HeroBannerProps } from "./HeroBanner";

export default withDatasourceCheck()<HeroBannerProps>(HeroBanner);