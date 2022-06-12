// Copyright 2022 The envd Authors
// Copyright 2022 The tilt Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { ExtensionContext, window } from "vscode"
// import { TiltfileErrorWatcher } from "./tiltfile-error-watcher"
import { EnvdLspClient } from "./envd-lsp-client"

const extensionName = "envd"

let client: EnvdLspClient
// let tiltfileErrorWatcher: TiltfileErrorWatcher

export function activate(context: ExtensionContext) {
  const ch = window.createOutputChannel(extensionName)
  client = new EnvdLspClient(context, ch)
  client.start()
  // tiltfileErrorWatcher = new TiltfileErrorWatcher(context, ch)
  // tiltfileErrorWatcher.start()
  // addEnvdLinkToStatusBar(context)
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined
  }
  return client.stop()
}
