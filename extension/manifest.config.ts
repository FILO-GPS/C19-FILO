import { defineManifest } from '@crxjs/vite-plugin';
export default defineManifest({
  manifest_version: 3,
  name: 'FILO',
  version: '0.1.0',
  description: 'Feedback for Intentional Learning and Ownership',
  action: {
    default_popup: 'popup.html',
  },
});
