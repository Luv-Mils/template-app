import { bookingConfig } from './booking/config';
import { crmConfig } from './crm/config';
import { projectMgmtConfig } from './project-mgmt/config';
import { invoiceConfig } from './invoice/config';
import { inventoryConfig } from './inventory/config';
import { atsConfig } from './ats/config';
import { helpdeskConfig } from './helpdesk/config';
import { membershipConfig } from './membership/config';
import { contentMgmtConfig } from './content-mgmt/config';
import { surveyConfig } from './survey/config';

export interface NavItem {
  path: string;
  label: string;
  icon: string;
  component: React.ComponentType;
}

export interface ChassisConfig {
  id: string;
  name: string;
  icon: string;
  description: string;
  navigation: NavItem[];
  seedData?: Record<string, Record<string, unknown>[]>;
  schema?: string;
}

const CHASSIS_REGISTRY: Record<string, ChassisConfig> = {
  booking: bookingConfig,
  crm: crmConfig,
  'project-mgmt': projectMgmtConfig,
  invoice: invoiceConfig,
  inventory: inventoryConfig,
  ats: atsConfig,
  helpdesk: helpdeskConfig,
  membership: membershipConfig,
  'content-mgmt': contentMgmtConfig,
  survey: surveyConfig,
};

export function getChassisConfig(id: string): ChassisConfig {
  return CHASSIS_REGISTRY[id] ?? CHASSIS_REGISTRY.booking;
}

export function getAllChassisIds(): string[] {
  return Object.keys(CHASSIS_REGISTRY);
}
