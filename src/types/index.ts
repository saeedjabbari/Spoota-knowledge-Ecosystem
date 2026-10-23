export type ActiveTab = 
  | 'overview'
  | 'missing-link'
  | 'vision-future'
  | 'recommendations'
  | 'roi-simulator'
  | 'pilot-roadmap'
  | 'original-site'
  | 'presentation-deck';

export interface MissingLinkItem {
  id: string;
  title: string;
  subtitle: string;
  currentPain: string;
  theMissingLink: string;
  spottaSolution: string;
  businessImpact: string;
  iconName: string;
  riskIfIgnored: string;
}

export interface HorizonPhase {
  phase: string;
  title: string;
  timeframe: string;
  milestones: string[];
  kpis: string[];
  organizationalImpact: string;
}

export interface RecommendationItem {
  id: string;
  title: string;
  category: 'استراتژی ارائه' | 'مدیریت ریسک' | 'اجرای پایلوت' | 'تعامل با پرسنل';
  theRecommendation: string;
  whyCrucialForManagement: string;
  actionableStep: string;
  potentialPitfall: string;
}

export interface ManagementFaq {
  question: string;
  typicalHesitation: string;
  bulletproofAnswer: string;
  supportingData: string;
}

export interface OriginalSection {
  id: string;
  slug: string;
  title: string;
  englishTitle: string;
  shortDesc: string;
  keyPoints: string[];
  executiveTakeaway: string;
  quote?: string;
}
