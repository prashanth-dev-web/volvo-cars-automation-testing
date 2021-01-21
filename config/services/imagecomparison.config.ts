const { join } = require('path');

export const imageComparisonConfig = [
    'image-comparison',
    {
        baselineFolder: join(process.cwd(), './images/'),
        formatImageName: '{tag}-{logName}-{width}x{height}',
        screenshotPath: join(process.cwd(), '.tmp/'),
        autoSaveBaseline: true,
        clearRuntimeFolder: true,
        savePerInstance: true
    }
];