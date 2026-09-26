export interface GardenImage {
  src: string;
  small?: string;
  medium?: string;
  width: number;
  height: number;
  alt: string;
}
/** Placeholder imagery is not a portrait or a photograph of the author. */
export const media: Record<'workspace' | 'mountains' | 'journey', GardenImage> =
  {
    workspace: {
      src: '/images/garden/workspace-960.webp',
      small: '/images/garden/workspace-480.webp',
      medium: '/images/garden/workspace-640.webp',
      width: 960,
      height: 720,
      alt: '窗边木桌上的笔记本电脑、笔记本、咖啡和绿植',
    },
    mountains: {
      src: '/images/garden/mountains.webp',
      width: 370,
      height: 80,
      alt: '落日下的山峰',
    },
    journey: {
      src: '/images/garden/journey.webp',
      width: 205,
      height: 90,
      alt: '车窗外的落日',
    },
  };
