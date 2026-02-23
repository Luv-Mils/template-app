import { seed } from './db';
import { getChassisConfig } from '../chassis';

/**
 * Seed the mock database with demo data for the active chassis.
 * Called once on app init to populate the preview with realistic data.
 */
export function seedDatabase(chassisId: string) {
  const config = getChassisConfig(chassisId);
  if (config.seedData) {
    for (const [table, rows] of Object.entries(config.seedData)) {
      seed(table, rows);
    }
  }
}
