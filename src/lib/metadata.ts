import { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
  openGraphImage?: string;
  noIndex?: boolean;
}

// SEO Constants
const SEO_CONSTANTS = {
  TITLE: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 60,
    SITE_NAME_SEPARATOR: " | ",
  },
  DESCRIPTION: {
    MIN_LENGTH: 120,
    MAX_LENGTH: 160,
  },
} as const;

function validateTitle(title: string): string {
  // Remove any HTML tags
  const cleanTitle = title.replace(/<[^>]*>/g, "");

  // Warn if too short
  if (cleanTitle.length < SEO_CONSTANTS.TITLE.MIN_LENGTH) {
    console.warn(
      `Title "${cleanTitle}" is too short. Minimum length is ${SEO_CONSTANTS.TITLE.MIN_LENGTH} characters.`,
    );
  }

  return cleanTitle;
}

function validateDescription(description: string): string {
  // Remove any HTML tags
  const cleanDescription = description.replace(/<[^>]*>/g, "");

  // Warn if too short
  if (cleanDescription.length < SEO_CONSTANTS.DESCRIPTION.MIN_LENGTH) {
    console.warn(
      `Description "${cleanDescription}" is too short. Minimum length is ${SEO_CONSTANTS.DESCRIPTION.MIN_LENGTH} characters.`,
    );
  }

  return cleanDescription;
}

export function generateMetadata({
  title,
  description,
  path,
  openGraphImage = "/opengraph-image.png",
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const baseUrl = "https://www.dashmicrosystems.com";
  const fullUrl = `${baseUrl}${path}`;

  // Clean and validate title and description without truncating
  const cleanTitle = validateTitle(title);
  const cleanDescription = validateDescription(description);

  // Create full title with site name
  const fullTitle = `${cleanTitle}${SEO_CONSTANTS.TITLE.SITE_NAME_SEPARATOR}Dash Microsystems`;

  return {
    title: fullTitle,
    description: cleanDescription,
    alternates: {
      canonical: path,
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: fullUrl,
      title: fullTitle,
      description: cleanDescription,
      siteName: "Dash Microsystems",
      images: [
        {
          url: openGraphImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: cleanDescription,
      creator: "@DashMicrosystem",
      images: [openGraphImage],
    },
  };
}
