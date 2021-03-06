import { ISnackbarOptions } from '@helpers';
import { BaseModel } from 'sjs-base-model';
import { v4 as uuidv4 } from 'uuid';

export class ErrorModel {
  public readonly id: string = uuidv4();
  public title = 'Unknown error!';
  public errors?: string[] = [];
  public actionType = 'Unknown';
  public url = 'Unknown';
  public notifications?: {
    analytics?: boolean;
    snackbar?: ISnackbarOptions;
  };
  public raw?: unknown = undefined;
  public readonly timestamp: number = Date.now();
  public confirmed: boolean = false;
}

export class InvalidDataErrorModal extends ErrorModel {
  constructor(title: string) {
    super();
    this.title = title;
  }
}

class HttpErrorBaseModel extends BaseModel {
  public readonly status: number = 0;
  public readonly statusText: string = 'UNKNOWN';

  constructor(data: Partial<HttpErrorBaseModel>) {
    super();
    this.update(data);
  }
  public update(data: Partial<HttpErrorBaseModel>): void {
    super.update(data);
  }
}

export class HttpError500Model extends HttpErrorBaseModel {
  public readonly data?: { message: string; path?: string; stack?: string } = undefined;

  constructor(data: Partial<HttpError500Model>) {
    super(data);
    this.update(data);
  }
}

export class HttpError404Model extends HttpErrorBaseModel {
  public readonly data?: { message: string; exception: string; file: string; line: number } = undefined;

  constructor(data: Partial<HttpError500Model>) {
    super(data);
    this.update(data);
  }
}

export class HttpError422Model extends HttpErrorBaseModel {
  public readonly data?: { errors: { [key: string]: string[] }; message: string } = undefined;

  constructor(data: Partial<HttpError422Model>) {
    super(data);
    this.update(data);
  }
}

export class HttpError401Model extends HttpErrorBaseModel {
  public readonly data?: { message?: string } = undefined;

  constructor(data: Partial<HttpError422Model>) {
    super(data);
    this.update(data);
  }
}
