// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Backai } from '../client';

export abstract class APIResource {
  protected _client: Backai;

  constructor(client: Backai) {
    this._client = client;
  }
}
