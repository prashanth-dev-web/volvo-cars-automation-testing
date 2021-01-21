import { capabilitiesChromeConfig } from './chrome.config';
import { capabilitiesFirefoxConfig } from './firefox.config';
import { hooksConfig } from './hooks.config';
import { loggingConfig } from './logging.config';
import { reportingConfig } from './reporting.config';
import { serverConfig } from './server.config';
import { testsConfig } from './tests.config';
import { imageComparisonConfig } from './services/imagecomparison.config';

export const config = {
  runner: 'local',
  baseUrl: 'http://localhost',

  framework: 'cucumber',
  maxInstances: 10,
  capabilities: [
    capabilitiesChromeConfig,
    // capabilitiesFirefoxConfig,
  ],

  services: [
    imageComparisonConfig
  ],

  ...serverConfig,
  ...testsConfig,
  ...loggingConfig,
  ...reportingConfig,
  ...hooksConfig,
};
