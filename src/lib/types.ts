export interface Tweet {
  lang: string;
  favorite_count: number;
  created_at: string;
  display_text_range: number[];
  entities: Entities;
  id_str: string;
  text: string;
  user: User;
  conversation_count: number;
  news_action_type: string;
  card?: Card;
  photos?: Photo[];
  video?: Video;
  self_thread?: SelfThread;
  quoted_tweet?: QuotedTweet;
  in_reply_to_screen_name?: string;
  in_reply_to_status_id_str?: string;
  in_reply_to_user_id_str?: string;
  parent?: Parent;
}

export interface Entities {
  hashtags: Hashtag[];
  urls: Url[];
  user_mentions: UserMention[];
  symbols: Symbol[];
  media?: Medum[];
}

export interface Hashtag {
  indices: number[];
  text: string;
}

export interface Url {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

export interface UserMention {
  id_str: string;
  indices: number[];
  name: string;
  screen_name: string;
}

export interface Symbol {
  indices: number[];
  text: string;
}

export interface Medum {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

export interface User {
  id_str: string;
  name: string;
  profile_image_url_https: string;
  screen_name: string;
  verified: boolean;
}

export interface Card {
  card_platform: CardPlatform;
  name: string;
  url: string;
  binding_values: BindingValues;
}

export interface CardPlatform {
  platform: Platform;
}

export interface Platform {
  audience: Audience;
  device: Device;
}

export interface Audience {
  name: string;
}

export interface Device {
  name: string;
  version: string;
}

export interface BindingValues {
  photo_image_full_size_large?: PhotoImageFullSizeLarge;
  thumbnail_image?: ThumbnailImage;
  description?: Description;
  domain?: Domain;
  thumbnail_image_large?: ThumbnailImageLarge;
  summary_photo_image_small?: SummaryPhotoImageSmall;
  thumbnail_image_original?: ThumbnailImageOriginal;
  site?: Site;
  photo_image_full_size_small?: PhotoImageFullSizeSmall;
  summary_photo_image_large?: SummaryPhotoImageLarge;
  thumbnail_image_small?: ThumbnailImageSmall;
  thumbnail_image_x_large?: ThumbnailImageXLarge;
  photo_image_full_size_original?: PhotoImageFullSizeOriginal;
  vanity_url?: VanityUrl;
  photo_image_full_size?: PhotoImageFullSize;
  thumbnail_image_color?: ThumbnailImageColor;
  title?: Title;
  summary_photo_image_color?: SummaryPhotoImageColor;
  summary_photo_image_x_large?: SummaryPhotoImageXLarge;
  summary_photo_image?: SummaryPhotoImage;
  photo_image_full_size_color?: PhotoImageFullSizeColor;
  photo_image_full_size_x_large?: PhotoImageFullSizeXLarge;
  card_url: CardUrl;
  summary_photo_image_original?: SummaryPhotoImageOriginal;
  app_star_rating?: AppStarRating;
  app_is_free?: AppIsFree;
  app_num_ratings?: AppNumRatings;
  app_price_amount?: AppPriceAmount;
  app_name?: AppName;
  app_price_currency?: AppPriceCurrency;
  creator?: Creator;
  choice1_label?: Choice1Label;
  choice2_label?: Choice2Label;
  end_datetime_utc?: EndDatetimeUtc;
  counts_are_final?: CountsAreFinal;
  choice2_count?: Choice2Count;
  choice1_count?: Choice1Count;
  choice4_label?: Choice4Label;
  last_updated_datetime_utc?: LastUpdatedDatetimeUtc;
  duration_minutes?: DurationMinutes;
  choice3_count?: Choice3Count;
  choice4_count?: Choice4Count;
  choice3_label?: Choice3Label;
  api?: Api;
}

export interface PhotoImageFullSizeLarge {
  image_value: ImageValue;
  type: string;
}

export interface ImageValue {
  height: number;
  width: number;
  url: string;
}

export interface ThumbnailImage {
  image_value: ImageValue2;
  type: string;
}

export interface ImageValue2 {
  height: number;
  width: number;
  url: string;
}

export interface Description {
  string_value: string;
  type: string;
}

export interface Domain {
  string_value: string;
  type: string;
}

export interface ThumbnailImageLarge {
  image_value: ImageValue3;
  type: string;
}

export interface ImageValue3 {
  height: number;
  width: number;
  url: string;
}

export interface SummaryPhotoImageSmall {
  image_value: ImageValue4;
  type: string;
}

export interface ImageValue4 {
  height: number;
  width: number;
  url: string;
}

export interface ThumbnailImageOriginal {
  image_value: ImageValue5;
  type: string;
}

export interface ImageValue5 {
  height: number;
  width: number;
  url: string;
}

export interface Site {
  scribe_key: string;
  type: string;
  user_value: UserValue;
}

export interface UserValue {
  id_str: string;
  path: any[];
}

export interface PhotoImageFullSizeSmall {
  image_value: ImageValue6;
  type: string;
}

export interface ImageValue6 {
  height: number;
  width: number;
  url: string;
}

export interface SummaryPhotoImageLarge {
  image_value: ImageValue7;
  type: string;
}

export interface ImageValue7 {
  height: number;
  width: number;
  url: string;
}

export interface ThumbnailImageSmall {
  image_value: ImageValue8;
  type: string;
}

export interface ImageValue8 {
  height: number;
  width: number;
  url: string;
}

export interface ThumbnailImageXLarge {
  image_value: ImageValue9;
  type: string;
}

export interface ImageValue9 {
  height: number;
  width: number;
  url: string;
}

export interface PhotoImageFullSizeOriginal {
  image_value: ImageValue10;
  type: string;
}

export interface ImageValue10 {
  height: number;
  width: number;
  url: string;
}

export interface VanityUrl {
  scribe_key: string;
  string_value: string;
  type: string;
}

export interface PhotoImageFullSize {
  image_value: ImageValue11;
  type: string;
}

export interface ImageValue11 {
  height: number;
  width: number;
  url: string;
}

export interface ThumbnailImageColor {
  image_color_value: ImageColorValue;
  type: string;
}

export interface ImageColorValue {
  palette: Palette[];
}

export interface Palette {
  rgb: Rgb;
  percentage: number;
}

export interface Rgb {
  blue: number;
  green: number;
  red: number;
}

export interface Title {
  string_value: string;
  type: string;
}

export interface SummaryPhotoImageColor {
  image_color_value: ImageColorValue2;
  type: string;
}

export interface ImageColorValue2 {
  palette: Palette2[];
}

export interface Palette2 {
  rgb: Rgb2;
  percentage: number;
}

export interface Rgb2 {
  blue: number;
  green: number;
  red: number;
}

export interface SummaryPhotoImageXLarge {
  image_value: ImageValue12;
  type: string;
}

export interface ImageValue12 {
  height: number;
  width: number;
  url: string;
}

export interface SummaryPhotoImage {
  image_value: ImageValue13;
  type: string;
}

export interface ImageValue13 {
  height: number;
  width: number;
  url: string;
}

export interface PhotoImageFullSizeColor {
  image_color_value: ImageColorValue3;
  type: string;
}

export interface ImageColorValue3 {
  palette: Palette3[];
}

export interface Palette3 {
  rgb: Rgb3;
  percentage: number;
}

export interface Rgb3 {
  blue: number;
  green: number;
  red: number;
}

export interface PhotoImageFullSizeXLarge {
  image_value: ImageValue14;
  type: string;
}

export interface ImageValue14 {
  height: number;
  width: number;
  url: string;
}

export interface CardUrl {
  scribe_key: string;
  string_value: string;
  type: string;
}

export interface SummaryPhotoImageOriginal {
  image_value: ImageValue15;
  type: string;
}

export interface ImageValue15 {
  height: number;
  width: number;
  url: string;
}

export interface AppStarRating {
  string_value: string;
  type: string;
}

export interface AppIsFree {
  string_value: string;
  type: string;
}

export interface AppNumRatings {
  string_value: string;
  type: string;
}

export interface AppPriceAmount {
  string_value: string;
  type: string;
}

export interface AppName {
  string_value: string;
  type: string;
}

export interface AppPriceCurrency {
  string_value: string;
  type: string;
}

export interface Creator {
  type: string;
  user_value: UserValue2;
}

export interface UserValue2 {
  id_str: string;
  path: any[];
}

export interface Choice1Label {
  string_value: string;
  type: string;
}

export interface Choice2Label {
  string_value: string;
  type: string;
}

export interface EndDatetimeUtc {
  string_value: string;
  type: string;
}

export interface CountsAreFinal {
  boolean_value: boolean;
  type: string;
}

export interface Choice2Count {
  string_value: string;
  type: string;
}

export interface Choice1Count {
  string_value: string;
  type: string;
}

export interface Choice4Label {
  string_value: string;
  type: string;
}

export interface LastUpdatedDatetimeUtc {
  string_value: string;
  type: string;
}

export interface DurationMinutes {
  string_value: string;
  type: string;
}

export interface Choice3Count {
  string_value: string;
  type: string;
}

export interface Choice4Count {
  string_value: string;
  type: string;
}

export interface Choice3Label {
  string_value: string;
  type: string;
}

export interface Api {
  string_value: string;
  type: string;
}

export interface Photo {
  backgroundColor: BackgroundColor;
  cropCandidates: CropCandidate[];
  expandedUrl: string;
  url: string;
  width: number;
  height: number;
  accessibilityLabel?: string;
}

export interface BackgroundColor {
  red: number;
  green: number;
  blue: number;
}

export interface CropCandidate {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Video {
  aspectRatio: number[];
  contentType: string;
  durationMs: number;
  mediaAvailability: MediaAvailability;
  poster: string;
  variants: Variant[];
  videoId: VideoId;
  viewCount: number;
}

export interface MediaAvailability {
  status: string;
}

export interface Variant {
  type: string;
  src: string;
}

export interface VideoId {
  type: string;
  id: string;
}

export interface SelfThread {
  id_str: string;
}

export interface QuotedTweet {
  lang: string;
  reply_count: number;
  retweet_count: number;
  favorite_count: number;
  self_thread?: SelfThread2;
  created_at: string;
  display_text_range: number[];
  entities: Entities;
  id_str: string;
  text: string;
  user: User2;
  photos?: any[];
  video?: Video2;
}

export interface SelfThread2 {
  id_str: string;
}

export interface Url2 {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

export interface Medum2 {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

export interface User2 {
  id_str: string;
  name: string;
  profile_image_url_https: string;
  screen_name: string;
  verified: boolean;
}

export interface Video2 {
  aspectRatio: number[];
  contentType: string;
  durationMs: number;
  mediaAvailability: MediaAvailability2;
  poster: string;
  variants: Variant2[];
  videoId: VideoId2;
  viewCount: number;
}

export interface MediaAvailability2 {
  status: string;
}

export interface Variant2 {
  type: string;
  src: string;
}

export interface VideoId2 {
  type: string;
  id: string;
}

export interface Parent {
  in_reply_to_screen_name: string;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id_str: string;
  lang: string;
  reply_count: number;
  retweet_count: number;
  favorite_count: number;
  self_thread: SelfThread3;
  created_at: string;
  display_text_range: number[];
  entities: Entities3;
  id_str: string;
  text: string;
  user: User3;
  photos: Photo2[];
}

export interface SelfThread3 {
  id_str: string;
}

export interface Entities3 {
  hashtags: any[];
  urls: any[];
  user_mentions: any[];
  symbols: any[];
  media: Medum3[];
}

export interface Medum3 {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
}

export interface User3 {
  id_str: string;
  name: string;
  profile_image_url_https: string;
  screen_name: string;
  verified: boolean;
}

export interface Photo2 {
  accessibilityLabel: string;
  backgroundColor: BackgroundColor2;
  cropCandidates: CropCandidate2[];
  expandedUrl: string;
  url: string;
  width: number;
  height: number;
}

export interface BackgroundColor2 {
  red: number;
  green: number;
  blue: number;
}

export interface CropCandidate2 {
  x: number;
  y: number;
  w: number;
  h: number;
}
