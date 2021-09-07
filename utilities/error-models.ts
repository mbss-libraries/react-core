import { ISnackbarOptions } from 'src/helpers';
import { BaseModel } from 'sjs-base-model';
import { v4 as uuidv4 } from 'uuid';

export class ErrorModel {
  public readonly id: string = uuidv4();
  public title = 'Unknown error!';
  public errors?: string[] = [];
  public source = 'Unknown';
  public notifications?: {
    analytics?: boolean;
    snackbar?: ISnackbarOptions;
  };
  public raw?: unknown = undefined;
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
  public readonly data?: { message: string; exception: string; file: string; line: number } = undefined;

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
