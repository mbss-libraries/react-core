/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import _ from 'lodash';
import { ErrorModel, HttpError401Model, HttpError404Model, HttpError422Model, HttpError500Model } from 'src/utilities';

export enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
  Options = 'OPTIONS',
  Head = 'HEAD',
  Patch = 'PATCH',
}

export const get = async (endpoint: string, params?: any, requestConfig?: AxiosRequestConfig): Promise<AxiosResponse | ErrorModel> => {
  const paramsConfig: AxiosRequestConfig | undefined = params ? { params } : undefined;

  return _request(
    {
      url: endpoint,
      method: RequestMethod.Get,
    },
    {
      ...paramsConfig,
      ...requestConfig,
    },
  );
};

export const post = async (endpoint: string, data?: any): Promise<AxiosResponse | ErrorModel> => {
  const config: AxiosRequestConfig | undefined = data ? { data } : undefined;

  return _request(
    {
      url: endpoint,
      method: RequestMethod.Post,
    },
    config,
  );
};

export const put = async (endpoint: string, data?: any): Promise<AxiosResponse | ErrorModel> => {
  const config: AxiosRequestConfig | undefined = data ? { data } : undefined;

  return _request(
    {
      url: endpoint,
      method: RequestMethod.Put,
    },
    config,
  );
};

export const patch = async (endpoint: string, data?: any): Promise<AxiosResponse | ErrorModel> => {
  const config: AxiosRequestConfig | undefined = data ? { data } : undefined;

  return _request(
    {
      url: endpoint,
      method: RequestMethod.Patch,
    },
    config,
  );
};

export const del = async (endpoint: string, data?: any): Promise<AxiosResponse | ErrorModel> => {
  const config: AxiosRequestConfig | undefined = data ? { data } : undefined;
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Delete,
    },
    config,
  );
};

export const _request = async (restRequest: Partial<Request>, config?: AxiosRequestConfig): Promise<AxiosResponse | ErrorModel> => {
  if (!restRequest.url) {
    console.error(`Received ${restRequest.url} which is invalid for a endpoint url`);
  }

  try {
    const axiosRequestConfig: AxiosRequestConfig = {
      ...config,
      withCredentials: true,
      method: restRequest.method as Method,
      url: restRequest.url,
      headers: {
        ...config?.headers,
      },
    };

    const [axiosResponse] = await Promise.all([axios(axiosRequestConfig), _delay()]);

    const { data } = axiosResponse;

    if (data.success === false) {
      console.error('[HttpUtility] Error 1');
      //   return _buildErrorModel(
      //     {
      //       message: data.errors.join(' - '),
      //       errors: data.errors,
      //       url: request ? request.responseURL : restRequest.url,
      //       raw: axiosResponse,
      //     },
      //     restRequest
      //   );
    }

    return {
      ...axiosResponse,
    };
  } catch (error) {
    // if (error.response) {
    //   // The request was made and the server responded with a status code that falls out of the range of 2xx
    //   const { status } = error.response;
    //   if (status === 500) {
    //     const e = new HttpError500Model(error.response);
    //     return _buildErrorModel(e, restRequest);
    //   }
    //   if (status === 401) {
    //     const e = new HttpError401Model(error.response);
    //     return _buildErrorModel(e, restRequest);
    //   }
    //   if (status === 404) {
    //     const e = new HttpError404Model(error.response);
    //     return _buildErrorModel(e, restRequest);
    //   }
    //   if (status === 422) {
    //     const e = new HttpError422Model(error.response);
    //     return _buildErrorModel(e, restRequest);
    //   }
    //   console.error('[HttpUtility] Error 2');
    // } else if (error.request) {
    // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
    // const { statusText } = error.request;
    // const model = new ErrorModel();

    // model.title = statusText;
    // if (error.message === 'Network Error') {
    //   model.title = 'Backend could not be reached! Please try again later!';
    // }

    // model.notifications = { analytics: true, snackbar: { type: 'danger' } };
    // return model;
    // }

    console.error('[HttpUtility] Error 4');
    // Something happened in setting up the request that triggered an Error
    // return _buildErrorModel(
    //   {
    //     status: 0,
    //     message: error.message,
    //     errors: [error.message],
    //     url: restRequest.url!,
    //     raw: error,
    //   },
    //   restRequest
    // );

    return _buildErrorModel(null, restRequest);
  }
};

const _buildErrorModel = (
  e: null | HttpError500Model | HttpError401Model | HttpError404Model | HttpError422Model,
  request: Partial<Request>,
): ErrorModel => {
  const model = new ErrorModel();
  if (e instanceof HttpError500Model || e instanceof HttpError404Model) {
    model.title = 'Bei der Anfrage ist ein Fehler aufgetreten!';
    model.source = request.url || 'axioas';
    model.notifications = { analytics: true, snackbar: { type: 'danger' } };
  }
  if (e instanceof HttpError422Model) {
    model.title = 'Fehlerhafte Eingabe!';
    if (_.size(e.data?.errors) === 1) {
      if (e.data?.errors[Object.keys(e.data?.errors)[0]][0]) {
        model.title = e.data?.errors[Object.keys(e.data?.errors)[0]][0];
      }
    }
    model.source = request.url || 'axioas';
    model.notifications = { analytics: true, snackbar: { type: 'danger' } };
  }
  if (e instanceof HttpError401Model) {
    model.title = e.data?.message ?? 'Session abgelaufen!';
    model.source = request.url || 'axioas';
    model.notifications = { analytics: true, snackbar: { type: 'danger' } };
  }

  model.raw = e;
  return model;
};

/**
 * We want to show the loading indicator to the user but sometimes the api
 * request finished too quickly. This makes sure there the loading indicator is
 * visual for at least a given time.
 *
 * @param duration
 * @returns {Promise<void>}
 * @private
 */
const _delay = (duration = 250): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
