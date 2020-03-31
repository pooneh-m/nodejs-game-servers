// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as gameserverconfigsserviceModule from '../src';

import {protobuf, LROperation} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubLongRunningCall<ResponseType>(
  response?: ResponseType,
  callError?: Error,
  lroError?: Error
) {
  const innerStub = lroError
    ? sinon.stub().rejects(lroError)
    : sinon.stub().resolves([response]);
  const mockOperation = {
    promise: innerStub,
  };
  return callError
    ? sinon.stub().rejects(callError)
    : sinon.stub().resolves([mockOperation]);
}

function stubLongRunningCallWithCallback<ResponseType>(
  response?: ResponseType,
  callError?: Error,
  lroError?: Error
) {
  const innerStub = lroError
    ? sinon.stub().rejects(lroError)
    : sinon.stub().resolves([response]);
  const mockOperation = {
    promise: innerStub,
  };
  return callError
    ? sinon.stub().callsArgWith(2, callError)
    : sinon.stub().callsArgWith(2, null, mockOperation);
}

describe('v1beta.GameServerConfigsServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient
        .servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient
        .apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    assert.strictEqual(client.gameServerConfigsServiceStub, undefined);
    await client.initialize();
    assert(client.gameServerConfigsServiceStub);
  });

  it('has close method', () => {
    const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('listGameServerConfigs', () => {
    it('invokes listGameServerConfigs without error', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.ListGameServerConfigsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.ListGameServerConfigsResponse()
      );
      client.innerApiCalls.listGameServerConfigs = stubSimpleCall(
        expectedResponse
      );
      const [response] = await client.listGameServerConfigs(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listGameServerConfigs as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listGameServerConfigs without error using callback', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.ListGameServerConfigsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.ListGameServerConfigsResponse()
      );
      client.innerApiCalls.listGameServerConfigs = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.listGameServerConfigs(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.gaming.v1beta.IListGameServerConfigsResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listGameServerConfigs as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listGameServerConfigs with error', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.ListGameServerConfigsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listGameServerConfigs = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.listGameServerConfigs(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.listGameServerConfigs as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('getGameServerConfig', () => {
    it('invokes getGameServerConfig without error', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.GetGameServerConfigRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.GameServerConfig()
      );
      client.innerApiCalls.getGameServerConfig = stubSimpleCall(
        expectedResponse
      );
      const [response] = await client.getGameServerConfig(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getGameServerConfig without error using callback', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.GetGameServerConfigRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.GameServerConfig()
      );
      client.innerApiCalls.getGameServerConfig = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.getGameServerConfig(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.gaming.v1beta.IGameServerConfig | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getGameServerConfig with error', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.GetGameServerConfigRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getGameServerConfig = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.getGameServerConfig(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.getGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('createGameServerConfig', () => {
    it('invokes createGameServerConfig without error', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.CreateGameServerConfigRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.createGameServerConfig = stubLongRunningCall(
        expectedResponse
      );
      const [operation] = await client.createGameServerConfig(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createGameServerConfig without error using callback', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.CreateGameServerConfigRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.createGameServerConfig = stubLongRunningCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.createGameServerConfig(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.cloud.gaming.v1beta.IGameServerConfig,
              protos.google.cloud.gaming.v1beta.IOperationMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.cloud.gaming.v1beta.IGameServerConfig,
        protos.google.cloud.gaming.v1beta.IOperationMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createGameServerConfig with call error', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.CreateGameServerConfigRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createGameServerConfig = stubLongRunningCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.createGameServerConfig(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.createGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createGameServerConfig with LRO error', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.CreateGameServerConfigRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createGameServerConfig = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.createGameServerConfig(request);
      assert.rejects(async () => {
        await operation.promise();
      }, expectedError);
      assert(
        (client.innerApiCalls.createGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('deleteGameServerConfig', () => {
    it('invokes deleteGameServerConfig without error', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.DeleteGameServerConfigRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.deleteGameServerConfig = stubLongRunningCall(
        expectedResponse
      );
      const [operation] = await client.deleteGameServerConfig(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes deleteGameServerConfig without error using callback', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.DeleteGameServerConfigRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.deleteGameServerConfig = stubLongRunningCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.deleteGameServerConfig(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.cloud.gaming.v1beta.IGameServerConfig,
              protos.google.cloud.gaming.v1beta.IOperationMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.cloud.gaming.v1beta.IGameServerConfig,
        protos.google.cloud.gaming.v1beta.IOperationMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes deleteGameServerConfig with call error', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.DeleteGameServerConfigRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteGameServerConfig = stubLongRunningCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.deleteGameServerConfig(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.deleteGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes deleteGameServerConfig with LRO error', async () => {
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.gaming.v1beta.DeleteGameServerConfigRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteGameServerConfig = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.deleteGameServerConfig(request);
      assert.rejects(async () => {
        await operation.promise();
      }, expectedError);
      assert(
        (client.innerApiCalls.deleteGameServerConfig as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('Path templates', () => {
    describe('gameServerCluster', () => {
      const fakePath = '/rendered/path/gameServerCluster';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        realm: 'realmValue',
        cluster: 'clusterValue',
      };
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.gameServerClusterPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.gameServerClusterPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('gameServerClusterPath', () => {
        const result = client.gameServerClusterPath(
          'projectValue',
          'locationValue',
          'realmValue',
          'clusterValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.gameServerClusterPathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromGameServerClusterName', () => {
        const result = client.matchProjectFromGameServerClusterName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.gameServerClusterPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromGameServerClusterName', () => {
        const result = client.matchLocationFromGameServerClusterName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.gameServerClusterPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchRealmFromGameServerClusterName', () => {
        const result = client.matchRealmFromGameServerClusterName(fakePath);
        assert.strictEqual(result, 'realmValue');
        assert(
          (client.pathTemplates.gameServerClusterPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchClusterFromGameServerClusterName', () => {
        const result = client.matchClusterFromGameServerClusterName(fakePath);
        assert.strictEqual(result, 'clusterValue');
        assert(
          (client.pathTemplates.gameServerClusterPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('gameServerConfig', () => {
      const fakePath = '/rendered/path/gameServerConfig';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        deployment: 'deploymentValue',
        config: 'configValue',
      };
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.gameServerConfigPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.gameServerConfigPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('gameServerConfigPath', () => {
        const result = client.gameServerConfigPath(
          'projectValue',
          'locationValue',
          'deploymentValue',
          'configValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.gameServerConfigPathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromGameServerConfigName', () => {
        const result = client.matchProjectFromGameServerConfigName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.gameServerConfigPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromGameServerConfigName', () => {
        const result = client.matchLocationFromGameServerConfigName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.gameServerConfigPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDeploymentFromGameServerConfigName', () => {
        const result = client.matchDeploymentFromGameServerConfigName(fakePath);
        assert.strictEqual(result, 'deploymentValue');
        assert(
          (client.pathTemplates.gameServerConfigPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchConfigFromGameServerConfigName', () => {
        const result = client.matchConfigFromGameServerConfigName(fakePath);
        assert.strictEqual(result, 'configValue');
        assert(
          (client.pathTemplates.gameServerConfigPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('gameServerDeployment', () => {
      const fakePath = '/rendered/path/gameServerDeployment';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        deployment: 'deploymentValue',
      };
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.gameServerDeploymentPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.gameServerDeploymentPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('gameServerDeploymentPath', () => {
        const result = client.gameServerDeploymentPath(
          'projectValue',
          'locationValue',
          'deploymentValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.gameServerDeploymentPathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromGameServerDeploymentName', () => {
        const result = client.matchProjectFromGameServerDeploymentName(
          fakePath
        );
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.gameServerDeploymentPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromGameServerDeploymentName', () => {
        const result = client.matchLocationFromGameServerDeploymentName(
          fakePath
        );
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.gameServerDeploymentPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDeploymentFromGameServerDeploymentName', () => {
        const result = client.matchDeploymentFromGameServerDeploymentName(
          fakePath
        );
        assert.strictEqual(result, 'deploymentValue');
        assert(
          (client.pathTemplates.gameServerDeploymentPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('gameServerDeploymentRollout', () => {
      const fakePath = '/rendered/path/gameServerDeploymentRollout';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        deployment: 'deploymentValue',
      };
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.gameServerDeploymentRolloutPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.gameServerDeploymentRolloutPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('gameServerDeploymentRolloutPath', () => {
        const result = client.gameServerDeploymentRolloutPath(
          'projectValue',
          'locationValue',
          'deploymentValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.gameServerDeploymentRolloutPathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromGameServerDeploymentRolloutName', () => {
        const result = client.matchProjectFromGameServerDeploymentRolloutName(
          fakePath
        );
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.gameServerDeploymentRolloutPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromGameServerDeploymentRolloutName', () => {
        const result = client.matchLocationFromGameServerDeploymentRolloutName(
          fakePath
        );
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.gameServerDeploymentRolloutPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDeploymentFromGameServerDeploymentRolloutName', () => {
        const result = client.matchDeploymentFromGameServerDeploymentRolloutName(
          fakePath
        );
        assert.strictEqual(result, 'deploymentValue');
        assert(
          (client.pathTemplates.gameServerDeploymentRolloutPathTemplate
            .match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('realm', () => {
      const fakePath = '/rendered/path/realm';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        realm: 'realmValue',
      };
      const client = new gameserverconfigsserviceModule.v1beta.GameServerConfigsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.realmPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.realmPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('realmPath', () => {
        const result = client.realmPath(
          'projectValue',
          'locationValue',
          'realmValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.realmPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromRealmName', () => {
        const result = client.matchProjectFromRealmName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.realmPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromRealmName', () => {
        const result = client.matchLocationFromRealmName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.realmPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchRealmFromRealmName', () => {
        const result = client.matchRealmFromRealmName(fakePath);
        assert.strictEqual(result, 'realmValue');
        assert(
          (client.pathTemplates.realmPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
