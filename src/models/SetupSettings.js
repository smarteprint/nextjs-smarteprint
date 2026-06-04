import mongoose from 'mongoose';

const setupSettingsSchema = new mongoose.Schema({
  showHeader: { type: Boolean, default: false },
  showLogo: { type: Boolean, default: false },
  allowModelSearch: { type: Boolean, default: true },
  showInstallationFailed: { type: Boolean, default: true },
  showCompleteSetup: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.models.SetupSettings || mongoose.model('SetupSettings', setupSettingsSchema);
