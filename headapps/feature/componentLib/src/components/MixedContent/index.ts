import { withDatasourceCheck } from '@sitecore-content-sdk/nextjs';
import { MixedContentDefaultComponent, DefaultVariant, InvertedVariant, MixedContentProps } from "./MixedContent";

export default withDatasourceCheck()<MixedContentProps>(MixedContentDefaultComponent);
export const Default = withDatasourceCheck()<MixedContentProps>(DefaultVariant);
export const Inverted = withDatasourceCheck()<MixedContentProps>(InvertedVariant);
