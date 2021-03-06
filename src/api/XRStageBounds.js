/*
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import XRStageBoundsPoint from './XRStageBoundsPoint';

const PRIVATE = Symbol('@@webxr-polyfill/XRStageBounds');

export default class XRStageBounds {
  constructor(boundsData) {
    const geometry = [];
    for (let i = 0; i < boundsData.length; i += 2) {
      geometry.push(new XRStageBoundsPoint(boundsData[i], boundsData[i + 1]));
    }
    this[PRIVATE] = { geometry };
  }

  /**
   * @return {<XRStageBoundsPoint>}
   */
  get geometry() { return this[PRIVATE].geometry; }
}
