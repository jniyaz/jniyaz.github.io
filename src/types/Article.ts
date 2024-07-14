export interface ArticleType {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: any[];
  jetpack_featured_media_url: string;
  jetpack_publicize_connections: any[];
  jetpack_shortlink: string;
  jetpack_sharing_enabled: boolean;
  jetpack_likes_enabled: boolean;
  "jetpack-related-posts": any[];
  _links: Links;
}

interface Links {
  self: About[];
  collection: About[];
  about: About[];
  author: Author[];
  replies: Author[];
  "version-history": VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:attachment": About[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

interface About {
  href: string;
}

interface Author {
  embeddable: boolean;
  href: string;
}

interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

interface PredecessorVersion {
  id: number;
  href: string;
}

interface VersionHistory {
  count: number;
  href: string;
}

interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface GUID {
  rendered: string;
}

interface Meta {
  advanced_seo_description: string;
  jetpack_seo_html_title: string;
  jetpack_seo_noindex: boolean;
  _coblocks_attr: string;
  _coblocks_dimensions: string;
  _coblocks_responsive_height: string;
  _coblocks_accordion_ie_support: string;
  jetpack_post_was_ever_published: boolean;
  reader_suggested_tags: string;
  _jetpack_newsletter_access: string;
  _jetpack_dont_email_post_to_subs: boolean;
  _jetpack_newsletter_tier_id: number;
  footnotes: string;
  jetpack_publicize_message: string;
  jetpack_publicize_feature_enabled: boolean;
  jetpack_social_post_already_shared: boolean;
  jetpack_social_options: JetpackSocialOptions;
}

interface JetpackSocialOptions {
  image_generator_settings: ImageGeneratorSettings;
}

interface ImageGeneratorSettings {
  template: string;
  enabled: boolean;
}
