/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** OAuth Client ID - Your Google OAuth client ID. Create one at https://console.developers.google.com/apis/credentials (iOS app type, Bundle ID: com.raycast) */
  "clientId": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `view-tasks` command */
  export type ViewTasks = ExtensionPreferences & {}
  /** Preferences accessible in the `create-task` command */
  export type CreateTask = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `view-tasks` command */
  export type ViewTasks = {}
  /** Arguments passed to the `create-task` command */
  export type CreateTask = {}
}

