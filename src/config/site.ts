// Single source of truth for contact details, tracking IDs and chat channels.
// Optional values come from environment variables (see .env.example). Anything left
// empty is simply not rendered, so nothing breaks while details are still pending.
const env = import.meta.env;
const clean = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

export const site = {
	name: 'TeamG Venturez',
	url: 'https://teamgventurez.com',
	email: 'info@teamgventurez.com',
	phoneLocal: '09173098138',
	phoneDisplay: '0917 309 8138',
	phoneIntl: '+639173098138',
	address: {
		street: '333 Luksuhin Ibaba',
		locality: 'Alfonso',
		region: 'Cavite',
		postalCode: '4123',
		country: 'PH',
	},
	addressDisplay: '333 Luksuhin Ibaba, Alfonso, Cavite 4123',
	provinces: ['Cavite', 'Laguna', 'Batangas', 'Rizal', 'Quezon'],
	formEndpoint: clean(env.PUBLIC_FORM_ENDPOINT),
	gaId: clean(env.PUBLIC_GA_ID) || 'G-RRLK12LMQ0', // Google Analytics 4 measurement ID (public); override via env
	metaPixelId: clean(env.PUBLIC_META_PIXEL_ID),
	viber: clean(env.PUBLIC_VIBER_NUMBER) || '+639173098138', // defaults to the main number; override via env
	whatsapp: clean(env.PUBLIC_WHATSAPP_NUMBER) || '+639173098138', // defaults to the main number; override via env
	messenger: clean(env.PUBLIC_MESSENGER_PAGE) || '61596817145519', // Facebook page ID or username (m.me link); override via env
	facebook: clean(env.PUBLIC_FACEBOOK_URL) || 'https://www.facebook.com/profile.php?id=61596817145519', // full page URL; override via env
};

const digits = (n: string) => n.replace(/[^\d+]/g, '');

/** Chat channels that have been configured. Phone is always available. */
export const chatChannels = [
	site.viber && {
		key: 'viber',
		label: 'Viber',
		href: `viber://chat?number=${encodeURIComponent(digits(site.viber))}`,
	},
	site.whatsapp && {
		key: 'whatsapp',
		label: 'WhatsApp',
		href: `https://wa.me/${digits(site.whatsapp).replace('+', '')}`,
	},
	site.messenger && {
		key: 'messenger',
		label: 'Messenger',
		href: `https://m.me/${site.messenger.replace(/^@/, '')}`,
	},
].filter(Boolean) as { key: string; label: string; href: string }[];
