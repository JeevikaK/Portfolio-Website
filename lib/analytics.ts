// Google Analytics 4 configuration and utilities
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific portfolio interactions
export const trackPortfolioEvent = (eventName: string, section?: string, details?: any) => {
  event({
    action: eventName,
    category: 'Portfolio',
    label: section,
    value: details?.value,
  });
};

// Track contact form submissions
export const trackContactSubmission = (success: boolean) => {
  event({
    action: success ? 'contact_form_success' : 'contact_form_error',
    category: 'Contact',
    label: 'Form Submission',
  });
};

// Track project link clicks
export const trackProjectClick = (projectName: string, linkType: 'demo' | 'github' | 'external') => {
  event({
    action: 'project_link_click',
    category: 'Projects',
    label: `${projectName} - ${linkType}`,
  });
};

// Track section views (when user scrolls to different sections)
export const trackSectionView = (sectionName: string) => {
  event({
    action: 'section_view',
    category: 'Navigation',
    label: sectionName,
  });
};

// Track skill interactions
export const trackSkillInteraction = (skillName: string, action: 'hover' | 'click') => {
  event({
    action: `skill_${action}`,
    category: 'Skills',
    label: skillName,
  });
};

// Track download events (like resume)
export const trackDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'Downloads',
    label: fileName,
  });
};
