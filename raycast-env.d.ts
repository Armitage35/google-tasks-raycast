/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** OAuth Client ID - Your Google OAuth client ID (see README for setup). Create at console.cloud.google.com > Credentials > OAuth client ID (iOS type, Bundle ID: com.raycast) */
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

