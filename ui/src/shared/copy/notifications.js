// All copy for notifications should be stored here for easy editing
// and ensuring stylistic consistency

import {
  STRING_TO_TITLE_CASE,
  FIVE_SECONDS,
  TEN_SECONDS,
  INFINITE,
} from 'shared/constants/index'

//  Misc Notifications
//  ----------------------------------------------------------------------------
export const genericFailMessage = 'Could not communicate with server.'

export const newVersionNotification = message => {
  return {
    type: 'info',
    icon: 'cubo-uniform',
    duration: INFINITE,
    message,
  }
}

export const notificationWithAltText = (type, message) => {
  return {
    type,
    icon: 'triangle',
    duration: TEN_SECONDS,
    message,
  }
}

export const enterPresentationModeNotification = {
  type: 'primary',
  icon: 'expand-b',
  duration: 7500,
  message: 'Press ESC to exit Presentation Mode.',
}

export const dataExplorerWriteSuccess = {
  type: 'success',
  icon: 'checkmark',
  duration: FIVE_SECONDS,
  message: 'Data was written successfully.',
}

export const sessionTimeoutNotification = {
  type: 'primary',
  icon: 'triangle',
  duration: INFINITE,
  message: 'Your session has timed out. Log in again to continue.',
}

export const internalServerErrorNotifications = sourceID => {
  return {
    checkLogs: {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      mesasage: 'Internal Server Error. Check API Logs.',
    },
    noKapacitors: {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      mesasage: `Internal Server Error. Could not retrieve Kapacitor Connections for source ${sourceID}.`,
    },
    deleteKapacitorFail: {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message: 'Internal Server Error. Could not delete Kapacitor Connection.',
    },
  }
}

//  Hosts Page Notifications
//  ----------------------------------------------------------------------------
export const unableToGetHostsMessage = 'Unable to get Hosts.'

export const unableToGetHostsNotification = {
  icon: 'alert-triangle',
  type: 'error',
  duration: FIVE_SECONDS,
  message: unableToGetHostsMessage,
}

export const unableToGetHostAppsMessage = 'Unable to get Apps for Hosts.'

export const unableToGetHostAppsNotification = {
  icon: 'alert-triangle',
  type: 'error',
  duration: FIVE_SECONDS,
  message: unableToGetHostAppsMessage,
}

//  InfluxDB Sources Notifications
//  ----------------------------------------------------------------------------
export const sourceNotifications = {
  createSuccess: sourceName => {
    return {
      type: 'success',
      icon: 'server2',
      duration: FIVE_SECONDS,
      message: `Connected to InfluxDB ${sourceName} successfully.`,
    }
  },
  createFail: (sourceName, errorMessage) => {
    return {
      type: 'error',
      icon: 'server2',
      duration: TEN_SECONDS,
      message: `Unable to connect to InfluxDB ${sourceName}: ${errorMessage}`,
    }
  },
  updateSuccess: sourceName => {
    return {
      type: 'success',
      icon: 'server2',
      duration: FIVE_SECONDS,
      message: `Updated InfluxDB ${sourceName} Connection successfully.`,
    }
  },
  updateFail: (sourceName, errorMessage) => {
    return {
      type: 'error',
      icon: 'server2',
      duration: TEN_SECONDS,
      message: `Failed to update InfluxDB ${sourceName} Connection: ${errorMessage}`,
    }
  },
  deleteSuccess: sourceName => {
    return {
      type: 'success',
      icon: 'server2',
      duration: FIVE_SECONDS,
      message: `${sourceName} deleted successfully.`,
    }
  },
  deleteFail: sourceName => {
    return {
      type: 'error',
      icon: 'server2',
      duration: TEN_SECONDS,
      message: `There was a problem deleting ${sourceName}.`,
    }
  },
  unavailable: sourceName => {
    return `Source ${sourceName} is no longer available. Successfully connected to another source.`
  },
  noneAvailable: sourceName => {
    return `Unable to connect to source ${sourceName}. No other sources available.`
  },
  connectionFail: sourceName => {
    return `Unable to connect to source ${sourceName}.`
  },
  connectionError: errorMessage => {
    return `Unable to connect to InfluxDB source: ${errorMessage}`
  },
  retrievalFail: 'Unable to retrieve sources.',
}

//  Multitenancy User Notifications
//  ----------------------------------------------------------------------------
export const multitenancyUserNotifications = {
  removedFromCurrent: {
    type: 'error',
    icon: 'alert-triangle',
    duration: INFINITE,
    message: 'You were removed from your current organization.',
  },
  removedFromAll: {
    type: 'error',
    icon: 'alert-triangle',
    duration: INFINITE,
    message:
      'You have been removed from all organizations. Please contact your administrator.',
  },
  currentDeleted: {
    type: 'error',
    icon: 'alert-triangle',
    duration: INFINITE,
    message: 'Your current organization was deleted.',
  },
  unauthorized: {
    type: 'error',
    icon: 'alert-triangle',
    duration: INFINITE,
    message:
      'This organization is private. To gain access, you must be explicitly added by an administrator.',
  },
  noSources: {
    type: 'error',
    icon: 'alert-triangle',
    duration: INFINITE,
    message: 'Organization has no sources configured.',
  },
  switchOrg: (orgName, roleName) => {
    return {
      type: 'primary',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `Now logged in to '${orgName}' as '${roleName}'.`,
    }
  },
}

//  Chronograf Admin Notifications
//  ----------------------------------------------------------------------------
export const chronografUserNotifications = {
  addUser: (user, organization) => {
    return `${user} has been added to ${organization} successfully.`
  },
  addUserValidation: {
    type: 'warning',
    icon: 'alert-triangle',
    duration: FIVE_SECONDS,
    message: 'User must have a Name and Provider.',
  },
  removeUser: (user, organization) => {
    return `${user} has been removed from ${organization} successfully.`
  },
  deleteUser: (user, isAbsoluteDelete) => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `${user} has been removed from ${isAbsoluteDelete
        ? 'all organizations and deleted.'
        : 'the current organization.'}`,
    }
  },
  updateUser: message => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message,
    }
  },
  deleteMapping: (id, scheme) => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `Mapping ${id}/${scheme} deleted successfully.`,
    }
  },
  deleteOrg: orgName => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `Organization ${orgName} deleted successfully.`,
    }
  },
}

//  InfluxDB Admin Notifications
//  ----------------------------------------------------------------------------
//  ObjectType can be User, Role, Database, Retention Policy, etc.
export const influxAdminNotifications = {
  createSuccess: objectType => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `${STRING_TO_TITLE_CASE(objectType)} created successfully.`,
    }
  },
  createFail: (objectType, errorMessage) => {
    return `Failed to create ${STRING_TO_TITLE_CASE(
      objectType
    )}: ${errorMessage}`
  },
  updateSuccess: objectType => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `${STRING_TO_TITLE_CASE(objectType)} updated successfully.`,
    }
  },
  updateFail: (objectType, errorMessage) => {
    return `Failed to update ${STRING_TO_TITLE_CASE(
      objectType
    )}: ${errorMessage}`
  },
  deleteSuccess: (objectType, name) => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `${STRING_TO_TITLE_CASE(
        objectType
      )} ${name} deleted successfully.`,
    }
  },
  deleteFail: (objectType, errorMessage) => {
    return `Failed to delete ${STRING_TO_TITLE_CASE(
      objectType
    )}: ${errorMessage}`
  },
  queriesError: message => {
    return {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message,
    }
  },
}

export const influxAdminValidationNotifications = {
  createRP: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message: 'Fields cannot be empty.',
  },
  deleteConfirm: databaseName => {
    return {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message: `Type "DELETE ${databaseName}" to confirm.`,
    }
  },
  saveUser: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message: 'Username and/or Password too short.',
  },
  saveRole: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message: 'Role Name is too short.',
  },
  dbNameBlank: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message: 'Database name cannot be blank.',
  },
  dbNameTaken: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message: 'A Database by this name already exists.',
  },
}

//  Dashboard Notifications
//  ----------------------------------------------------------------------------
export const dashboardNotifications = {
  deleteSuccess: name => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `Dashboard ${name} deleted successfully.`,
    }
  },
  deleteFail: (name, errorMessage) => {
    return `Failed to delete Dashboard ${name}: ${errorMessage}.`
  },
  notFound: dashboardID => {
    return {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message: `Dashboard ${dashboardID} could not be found`,
    }
  },
  tempVarAlreadyExists: tempVarName => {
    return {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message: `Variable '${tempVarName}' already exists. Please enter a new value.`,
    }
  },
}

//  Rule Builder Notifications
//  ----------------------------------------------------------------------------
export const ruleBuilderNotifications = {
  createSuccess: {
    type: 'success',
    icon: 'checkmark',
    duration: FIVE_SECONDS,
    message: 'Alert Rule created successfully.',
  },
  createFail: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message: 'There was a problem creating the Alert Rule.',
  },
  deleteSuccess: ruleName => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `${ruleName} deleted successfully.`,
    }
  },
  deleteFail: ruleName => {
    return {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message: `${ruleName} could not be deleted.`,
    }
  },
  updateSuccess: ruleName => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `${ruleName} saved successfully.`,
    }
  },
  updateFail: (ruleName, errorMessage) => {
    return {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message: `There was a problem saving ${ruleName}: ${errorMessage}`,
    }
  },
  toggleStatusSuccess: (ruleName, status) => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `${ruleName} ${status} successfully.`,
    }
  },
  toggleStatusFail: (ruleName, status) => {
    return {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message: `${ruleName} could not be ${status}.`,
    }
  },
  validation: {
    missingQuery: 'Please select a Database, Measurement, and Field.',
    missingCondition: 'Please enter a value in the Conditions section.',
    deadman: 'Deadman rules require a Database and Measurement.',
  },
}

//  Kapacitor Configuration Notifications
//  ----------------------------------------------------------------------------
export const kapacitorConfigNotifications = {
  alreadyTaken: kapacitorName => {
    return {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message: `There is already a Kapacitor Connection named "${kapacitorName}".`,
    }
  },
  updateSuccess: {
    type: 'success',
    icon: 'checkmark',
    duration: FIVE_SECONDS,
    message: 'Kapacitor Connection updated successfully.',
  },
  updateFail: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message: 'There was a problem updating the Kapacitor Connection.',
  },
  createSuccess: {
    type: 'success',
    icon: 'checkmark',
    duration: FIVE_SECONDS,
    message:
      'Connected to Kapacitor successfully! Configuring endpoints is optional.',
  },
  createFail: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message: 'There was a problem connecting to Kapacitor.',
  },
  connectFail: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message:
      'Could not connect to Kapacitor. Check your connection settings in the Configuration page.',
  },
  notFound: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message: 'We could not find a Kapacitor configuration for this source.',
  },
  saveEndpointSuccess: endpoint => {
    return {
      type: 'success',
      icon: 'checkmark',
      duration: FIVE_SECONDS,
      message: `Alert configuration for ${endpoint} saved successfully.`,
    }
  },
  saveEndpointFail: (endpoint, errorMessage) => {
    return {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message: `There was an error saving the alert configuration for ${endpoint}: ${errorMessage}`,
    }
  },
  testEndpointSucess: endpoint => {
    return {
      type: 'success',
      icon: 'pulse-c',
      duration: FIVE_SECONDS,
      message: `Test Alert sent to ${endpoint}. If the Alert does not reach its destination, please check your endpoint configuration settings.`,
    }
  },
  testEndpointFail: (endpoint, errorMessage) => {
    return {
      type: 'error',
      icon: 'pulse-c',
      duration: TEN_SECONDS,
      message: `There was an error sending a Test Alert to ${endpoint}${errorMessage
        ? `: ${errorMessage}`
        : '.'}`,
    }
  },
  refreshFail: {
    type: 'error',
    icon: 'alert-triangle',
    duration: TEN_SECONDS,
    message: 'There was an error getting the Kapacitor configuration.',
  },
}

//  TICKscript Notifications
//  ----------------------------------------------------------------------------
export const tickscriptNotifications = {
  createSuccess: {
    type: 'success',
    icon: 'checkmark',
    duration: FIVE_SECONDS,
    message: 'TICKscript successfully created.',
  },
  createFail: 'Failed to create TICKscript.',
  updateSuccess: {
    type: 'success',
    icon: 'checkmark',
    duration: FIVE_SECONDS,
    message: 'TICKscript saved successfully.',
  },
  updateFail: 'TICKscript could not be saved.',
  notFound: 'We could not find a Kapacitor configuration for this source.',
  loggingUnavailable: {
    type: 'warning',
    icon: 'alert-triangle',
    duration: INFINITE,
    message: 'Kapacitor version 1.4 required to view TICKscript logs',
  },
  loggingError: error => {
    return {
      type: 'error',
      icon: 'alert-triangle',
      duration: TEN_SECONDS,
      message: error,
    }
  },
}
