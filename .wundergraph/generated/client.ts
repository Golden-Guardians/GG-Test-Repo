import type {
	ClientConfig,
	CreateClientConfig,
	User,
	UploadRequestOptions,
	OperationMetadata,
	OperationsDefinition,
	OperationRequestOptions,
	SubscriptionRequestOptions,
	SubscriptionEventHandler,
	FetchUserRequestOptions,
	UploadValidationOptions,
	QueryRequestOptions,
	MutationRequestOptions,
	ClientOperationErrors,
	ExtractProfileName,
	ExtractMeta,
	GraphQLError,
} from "@wundergraph/sdk/client";
import { Client } from "@wundergraph/sdk/client";
import type { OperationErrors } from "./ts-operation-errors";

import type { PublicCustomClaims } from "./claims";
import type {
	CountriesContinentResponse,
	CountriesContinentInput,
	CountriesContinentResponseData,
	CountriesContinentsResponse,
	CountriesContinentsInput,
	CountriesContinentsResponseData,
	CountriesCountriesResponse,
	CountriesCountriesInput,
	CountriesCountriesResponseData,
	CountriesCountryResponse,
	CountriesCountryInput,
	CountriesCountryResponseData,
	CountriesCountryByCodeResponse,
	CountriesCountryByCodeInput,
	CountriesCountryByCodeResponseData,
	CountriesLanguageResponse,
	CountriesLanguageInput,
	CountriesLanguageResponseData,
	CountriesLanguagesResponse,
	CountriesLanguagesInput,
	CountriesLanguagesResponseData,
	DbAggregateAccountResponse,
	DbAggregateAccountInput,
	DbAggregateAccountResponseData,
	DbAggregateSessionResponse,
	DbAggregateSessionInput,
	DbAggregateSessionResponseData,
	DbAggregateUserResponse,
	DbAggregateUserInput,
	DbAggregateUserResponseData,
	DbAggregateVerificationTokenResponse,
	DbAggregateVerificationTokenInput,
	DbAggregateVerificationTokenResponseData,
	DbCreateManyAccountResponse,
	DbCreateManyAccountInput,
	DbCreateManyAccountResponseData,
	DbCreateManySessionResponse,
	DbCreateManySessionInput,
	DbCreateManySessionResponseData,
	DbCreateManyUserResponse,
	DbCreateManyUserInput,
	DbCreateManyUserResponseData,
	DbCreateManyVerificationTokenResponse,
	DbCreateManyVerificationTokenInput,
	DbCreateManyVerificationTokenResponseData,
	DbCreateOneAccountResponse,
	DbCreateOneAccountInput,
	DbCreateOneAccountResponseData,
	DbCreateOneSessionResponse,
	DbCreateOneSessionInput,
	DbCreateOneSessionResponseData,
	DbCreateOneUserResponse,
	DbCreateOneUserInput,
	DbCreateOneUserResponseData,
	DbCreateOneVerificationTokenResponse,
	DbCreateOneVerificationTokenInput,
	DbCreateOneVerificationTokenResponseData,
	DbDeleteManyAccountResponse,
	DbDeleteManyAccountInput,
	DbDeleteManyAccountResponseData,
	DbDeleteManySessionResponse,
	DbDeleteManySessionInput,
	DbDeleteManySessionResponseData,
	DbDeleteManyUserResponse,
	DbDeleteManyUserInput,
	DbDeleteManyUserResponseData,
	DbDeleteManyVerificationTokenResponse,
	DbDeleteManyVerificationTokenInput,
	DbDeleteManyVerificationTokenResponseData,
	DbDeleteOneAccountResponse,
	DbDeleteOneAccountInput,
	DbDeleteOneAccountResponseData,
	DbDeleteOneSessionResponse,
	DbDeleteOneSessionInput,
	DbDeleteOneSessionResponseData,
	DbDeleteOneUserResponse,
	DbDeleteOneUserInput,
	DbDeleteOneUserResponseData,
	DbDeleteOneVerificationTokenResponse,
	DbDeleteOneVerificationTokenInput,
	DbDeleteOneVerificationTokenResponseData,
	DbExecuteRawResponse,
	DbExecuteRawInput,
	DbExecuteRawResponseData,
	DbFindFirstAccountResponse,
	DbFindFirstAccountInput,
	DbFindFirstAccountResponseData,
	DbFindFirstAccountOrThrowResponse,
	DbFindFirstAccountOrThrowInput,
	DbFindFirstAccountOrThrowResponseData,
	DbFindFirstSessionResponse,
	DbFindFirstSessionInput,
	DbFindFirstSessionResponseData,
	DbFindFirstSessionOrThrowResponse,
	DbFindFirstSessionOrThrowInput,
	DbFindFirstSessionOrThrowResponseData,
	DbFindFirstUserResponse,
	DbFindFirstUserInput,
	DbFindFirstUserResponseData,
	DbFindFirstUserOrThrowResponse,
	DbFindFirstUserOrThrowInput,
	DbFindFirstUserOrThrowResponseData,
	DbFindFirstVerificationTokenResponse,
	DbFindFirstVerificationTokenInput,
	DbFindFirstVerificationTokenResponseData,
	DbFindFirstVerificationTokenOrThrowResponse,
	DbFindFirstVerificationTokenOrThrowInput,
	DbFindFirstVerificationTokenOrThrowResponseData,
	DbFindManyAccountResponse,
	DbFindManyAccountInput,
	DbFindManyAccountResponseData,
	DbFindManySessionResponse,
	DbFindManySessionInput,
	DbFindManySessionResponseData,
	DbFindManyUserResponse,
	DbFindManyUserInput,
	DbFindManyUserResponseData,
	DbFindManyVerificationTokenResponse,
	DbFindManyVerificationTokenInput,
	DbFindManyVerificationTokenResponseData,
	DbFindUniqueAccountResponse,
	DbFindUniqueAccountInput,
	DbFindUniqueAccountResponseData,
	DbFindUniqueAccountOrThrowResponse,
	DbFindUniqueAccountOrThrowInput,
	DbFindUniqueAccountOrThrowResponseData,
	DbFindUniqueSessionResponse,
	DbFindUniqueSessionInput,
	DbFindUniqueSessionResponseData,
	DbFindUniqueSessionOrThrowResponse,
	DbFindUniqueSessionOrThrowInput,
	DbFindUniqueSessionOrThrowResponseData,
	DbFindUniqueUserResponse,
	DbFindUniqueUserInput,
	DbFindUniqueUserResponseData,
	DbFindUniqueUserOrThrowResponse,
	DbFindUniqueUserOrThrowInput,
	DbFindUniqueUserOrThrowResponseData,
	DbFindUniqueVerificationTokenResponse,
	DbFindUniqueVerificationTokenInput,
	DbFindUniqueVerificationTokenResponseData,
	DbFindUniqueVerificationTokenOrThrowResponse,
	DbFindUniqueVerificationTokenOrThrowInput,
	DbFindUniqueVerificationTokenOrThrowResponseData,
	DbGroupByAccountResponse,
	DbGroupByAccountInput,
	DbGroupByAccountResponseData,
	DbGroupBySessionResponse,
	DbGroupBySessionInput,
	DbGroupBySessionResponseData,
	DbGroupByUserResponse,
	DbGroupByUserInput,
	DbGroupByUserResponseData,
	DbGroupByVerificationTokenResponse,
	DbGroupByVerificationTokenInput,
	DbGroupByVerificationTokenResponseData,
	DbQueryRawResponse,
	DbQueryRawInput,
	DbQueryRawResponseData,
	DbQueryRawJSONResponse,
	DbQueryRawJSONInput,
	DbQueryRawJSONResponseData,
	DbUpdateManyAccountResponse,
	DbUpdateManyAccountInput,
	DbUpdateManyAccountResponseData,
	DbUpdateManySessionResponse,
	DbUpdateManySessionInput,
	DbUpdateManySessionResponseData,
	DbUpdateManyUserResponse,
	DbUpdateManyUserInput,
	DbUpdateManyUserResponseData,
	DbUpdateManyVerificationTokenResponse,
	DbUpdateManyVerificationTokenInput,
	DbUpdateManyVerificationTokenResponseData,
	DbUpdateOneAccountResponse,
	DbUpdateOneAccountInput,
	DbUpdateOneAccountResponseData,
	DbUpdateOneSessionResponse,
	DbUpdateOneSessionInput,
	DbUpdateOneSessionResponseData,
	DbUpdateOneUserResponse,
	DbUpdateOneUserInput,
	DbUpdateOneUserResponseData,
	DbUpdateOneVerificationTokenResponse,
	DbUpdateOneVerificationTokenInput,
	DbUpdateOneVerificationTokenResponseData,
	DbUpsertOneAccountResponse,
	DbUpsertOneAccountInput,
	DbUpsertOneAccountResponseData,
	DbUpsertOneSessionResponse,
	DbUpsertOneSessionInput,
	DbUpsertOneSessionResponseData,
	DbUpsertOneUserResponse,
	DbUpsertOneUserInput,
	DbUpsertOneUserResponseData,
	DbUpsertOneVerificationTokenResponse,
	DbUpsertOneVerificationTokenInput,
	DbUpsertOneVerificationTokenResponseData,
	UsersGetAllUsersResponse,
	UsersGetAllUsersResponseData,
	WeatherGetCityByIdResponse,
	WeatherGetCityByIdInput,
	WeatherGetCityByIdResponseData,
	WeatherGetCityByNameResponse,
	WeatherGetCityByNameInput,
	WeatherGetCityByNameResponseData,
	OpenaiExtract_website_metadataResponse,
	OpenaiExtract_website_metadataInput,
	OpenaiExtract_website_metadataResponseData,
	OpenaiLoad_urlResponse,
	OpenaiLoad_urlInput,
	OpenaiLoad_urlResponseData,
	OpenaiSummarize_url_contentResponse,
	OpenaiSummarize_url_contentInput,
	OpenaiSummarize_url_contentResponseData,
	OpenaiSummaryResponse,
	OpenaiSummaryInput,
	OpenaiSummaryResponseData,
	OpenaiWeatherResponse,
	OpenaiWeatherInput,
	OpenaiWeatherResponseData,
	UsersGetResponse,
	UsersGetInput,
	UsersGetResponseData,
	UsersSubscribeResponse,
	UsersSubscribeInput,
	UsersSubscribeResponseData,
	UsersUpdateResponse,
	UsersUpdateInput,
	UsersUpdateResponseData,
} from "./models";
export type UserRole = "admin" | "user";

export const WUNDERGRAPH_S3_ENABLED = false;
export const WUNDERGRAPH_AUTH_ENABLED = false;

export const defaultClientConfig: ClientConfig = {
	applicationHash: "5ff909b7",
	baseURL: "http://localhost:9991",
	sdkVersion: "0.179.3",
};

export const operationMetadata: OperationMetadata = {
	"countries/Continent": {
		requiresAuthentication: false,
	},
	"countries/Continents": {
		requiresAuthentication: false,
	},
	"countries/Countries": {
		requiresAuthentication: false,
	},
	"countries/Country": {
		requiresAuthentication: false,
	},
	"countries/CountryByCode": {
		requiresAuthentication: false,
	},
	"countries/Language": {
		requiresAuthentication: false,
	},
	"countries/Languages": {
		requiresAuthentication: false,
	},
	"db/AggregateAccount": {
		requiresAuthentication: false,
	},
	"db/AggregateSession": {
		requiresAuthentication: false,
	},
	"db/AggregateUser": {
		requiresAuthentication: false,
	},
	"db/AggregateVerificationToken": {
		requiresAuthentication: false,
	},
	"db/CreateManyAccount": {
		requiresAuthentication: false,
	},
	"db/CreateManySession": {
		requiresAuthentication: false,
	},
	"db/CreateManyUser": {
		requiresAuthentication: false,
	},
	"db/CreateManyVerificationToken": {
		requiresAuthentication: false,
	},
	"db/CreateOneAccount": {
		requiresAuthentication: false,
	},
	"db/CreateOneSession": {
		requiresAuthentication: false,
	},
	"db/CreateOneUser": {
		requiresAuthentication: false,
	},
	"db/CreateOneVerificationToken": {
		requiresAuthentication: false,
	},
	"db/DeleteManyAccount": {
		requiresAuthentication: false,
	},
	"db/DeleteManySession": {
		requiresAuthentication: false,
	},
	"db/DeleteManyUser": {
		requiresAuthentication: false,
	},
	"db/DeleteManyVerificationToken": {
		requiresAuthentication: false,
	},
	"db/DeleteOneAccount": {
		requiresAuthentication: false,
	},
	"db/DeleteOneSession": {
		requiresAuthentication: false,
	},
	"db/DeleteOneUser": {
		requiresAuthentication: false,
	},
	"db/DeleteOneVerificationToken": {
		requiresAuthentication: false,
	},
	"db/ExecuteRaw": {
		requiresAuthentication: false,
	},
	"db/FindFirstAccount": {
		requiresAuthentication: false,
	},
	"db/FindFirstAccountOrThrow": {
		requiresAuthentication: false,
	},
	"db/FindFirstSession": {
		requiresAuthentication: false,
	},
	"db/FindFirstSessionOrThrow": {
		requiresAuthentication: false,
	},
	"db/FindFirstUser": {
		requiresAuthentication: false,
	},
	"db/FindFirstUserOrThrow": {
		requiresAuthentication: false,
	},
	"db/FindFirstVerificationToken": {
		requiresAuthentication: false,
	},
	"db/FindFirstVerificationTokenOrThrow": {
		requiresAuthentication: false,
	},
	"db/FindManyAccount": {
		requiresAuthentication: false,
	},
	"db/FindManySession": {
		requiresAuthentication: false,
	},
	"db/FindManyUser": {
		requiresAuthentication: false,
	},
	"db/FindManyVerificationToken": {
		requiresAuthentication: false,
	},
	"db/FindUniqueAccount": {
		requiresAuthentication: false,
	},
	"db/FindUniqueAccountOrThrow": {
		requiresAuthentication: false,
	},
	"db/FindUniqueSession": {
		requiresAuthentication: false,
	},
	"db/FindUniqueSessionOrThrow": {
		requiresAuthentication: false,
	},
	"db/FindUniqueUser": {
		requiresAuthentication: false,
	},
	"db/FindUniqueUserOrThrow": {
		requiresAuthentication: false,
	},
	"db/FindUniqueVerificationToken": {
		requiresAuthentication: false,
	},
	"db/FindUniqueVerificationTokenOrThrow": {
		requiresAuthentication: false,
	},
	"db/GroupByAccount": {
		requiresAuthentication: false,
	},
	"db/GroupBySession": {
		requiresAuthentication: false,
	},
	"db/GroupByUser": {
		requiresAuthentication: false,
	},
	"db/GroupByVerificationToken": {
		requiresAuthentication: false,
	},
	"db/QueryRaw": {
		requiresAuthentication: false,
	},
	"db/QueryRawJSON": {
		requiresAuthentication: false,
	},
	"db/UpdateManyAccount": {
		requiresAuthentication: false,
	},
	"db/UpdateManySession": {
		requiresAuthentication: false,
	},
	"db/UpdateManyUser": {
		requiresAuthentication: false,
	},
	"db/UpdateManyVerificationToken": {
		requiresAuthentication: false,
	},
	"db/UpdateOneAccount": {
		requiresAuthentication: false,
	},
	"db/UpdateOneSession": {
		requiresAuthentication: false,
	},
	"db/UpdateOneUser": {
		requiresAuthentication: false,
	},
	"db/UpdateOneVerificationToken": {
		requiresAuthentication: false,
	},
	"db/UpsertOneAccount": {
		requiresAuthentication: false,
	},
	"db/UpsertOneSession": {
		requiresAuthentication: false,
	},
	"db/UpsertOneUser": {
		requiresAuthentication: false,
	},
	"db/UpsertOneVerificationToken": {
		requiresAuthentication: false,
	},
	"users/GetAllUsers": {
		requiresAuthentication: false,
	},
	"weather/GetCityById": {
		requiresAuthentication: false,
	},
	"weather/GetCityByName": {
		requiresAuthentication: false,
	},
	"openai/extract-website-metadata": {
		requiresAuthentication: false,
	},
	"openai/load-url": {
		requiresAuthentication: false,
	},
	"openai/summarize-url-content": {
		requiresAuthentication: false,
	},
	"openai/summary": {
		requiresAuthentication: false,
	},
	"openai/weather": {
		requiresAuthentication: false,
	},
	"users/get": {
		requiresAuthentication: false,
	},
	"users/subscribe": {
		requiresAuthentication: false,
	},
	"users/update": {
		requiresAuthentication: false,
	},
};

export type PublicUser = User<UserRole, PublicCustomClaims>;

export class WunderGraphClient extends Client {
	query<
		OperationName extends Extract<keyof Operations["queries"], string>,
		Input extends Operations["queries"][OperationName]["input"] = Operations["queries"][OperationName]["input"],
		Response extends Operations["queries"][OperationName]["response"] = Operations["queries"][OperationName]["response"]
	>(options: OperationName extends string ? QueryRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.query<OperationRequestOptions, Response["data"], Response["error"]>(options);
	}

	mutate<
		OperationName extends Extract<keyof Operations["mutations"], string>,
		Input extends Operations["mutations"][OperationName]["input"] = Operations["mutations"][OperationName]["input"],
		Response extends Operations["mutations"][OperationName]["response"] = Operations["mutations"][OperationName]["response"]
	>(options: OperationName extends string ? MutationRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.mutate<OperationRequestOptions, Response["data"], Response["error"]>(options);
	}

	subscribe<
		OperationName extends Extract<keyof Operations["subscriptions"], string>,
		Input extends Operations["subscriptions"][OperationName]["input"] = Operations["subscriptions"][OperationName]["input"],
		Response extends Operations["subscriptions"][OperationName]["response"] = Operations["subscriptions"][OperationName]["response"]
	>(
		options: OperationName extends string
			? SubscriptionRequestOptions<OperationName, Input>
			: SubscriptionRequestOptions,
		cb?: SubscriptionEventHandler<Response["data"], Response["error"]>
	) {
		return super.subscribe<OperationRequestOptions, Response["data"], Response["error"]>(options, cb);
	}
	public login(authProviderID: Operations["authProvider"], redirectURI?: string) {
		return super.login(authProviderID, redirectURI);
	}
	public async fetchUser<TUser extends PublicUser = PublicUser>(options?: FetchUserRequestOptions) {
		return super.fetchUser<TUser>(options);
	}
}

export const createClient = (config?: CreateClientConfig) => {
	return new WunderGraphClient({
		...defaultClientConfig,
		...config,
		operationMetadata,
		csrfEnabled: false,
	});
};

export type Queries = {
	"countries/Continent": {
		input: CountriesContinentInput;
		response: { data?: CountriesContinentResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"countries/Continents": {
		input: CountriesContinentsInput;
		response: { data?: CountriesContinentsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"countries/Countries": {
		input: CountriesCountriesInput;
		response: { data?: CountriesCountriesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"countries/Country": {
		input: CountriesCountryInput;
		response: { data?: CountriesCountryResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"countries/CountryByCode": {
		input: CountriesCountryByCodeInput;
		response: { data?: CountriesCountryByCodeResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"countries/Language": {
		input: CountriesLanguageInput;
		response: { data?: CountriesLanguageResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"countries/Languages": {
		input: CountriesLanguagesInput;
		response: { data?: CountriesLanguagesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/AggregateAccount": {
		input: DbAggregateAccountInput;
		response: { data?: DbAggregateAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/AggregateSession": {
		input: DbAggregateSessionInput;
		response: { data?: DbAggregateSessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/AggregateUser": {
		input: DbAggregateUserInput;
		response: { data?: DbAggregateUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/AggregateVerificationToken": {
		input: DbAggregateVerificationTokenInput;
		response: { data?: DbAggregateVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindFirstAccount": {
		input: DbFindFirstAccountInput;
		response: { data?: DbFindFirstAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindFirstAccountOrThrow": {
		input: DbFindFirstAccountOrThrowInput;
		response: { data?: DbFindFirstAccountOrThrowResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindFirstSession": {
		input: DbFindFirstSessionInput;
		response: { data?: DbFindFirstSessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindFirstSessionOrThrow": {
		input: DbFindFirstSessionOrThrowInput;
		response: { data?: DbFindFirstSessionOrThrowResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindFirstUser": {
		input: DbFindFirstUserInput;
		response: { data?: DbFindFirstUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindFirstUserOrThrow": {
		input: DbFindFirstUserOrThrowInput;
		response: { data?: DbFindFirstUserOrThrowResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindFirstVerificationToken": {
		input: DbFindFirstVerificationTokenInput;
		response: { data?: DbFindFirstVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindFirstVerificationTokenOrThrow": {
		input: DbFindFirstVerificationTokenOrThrowInput;
		response: { data?: DbFindFirstVerificationTokenOrThrowResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindManyAccount": {
		input: DbFindManyAccountInput;
		response: { data?: DbFindManyAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindManySession": {
		input: DbFindManySessionInput;
		response: { data?: DbFindManySessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindManyUser": {
		input: DbFindManyUserInput;
		response: { data?: DbFindManyUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindManyVerificationToken": {
		input: DbFindManyVerificationTokenInput;
		response: { data?: DbFindManyVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindUniqueAccount": {
		input: DbFindUniqueAccountInput;
		response: { data?: DbFindUniqueAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindUniqueAccountOrThrow": {
		input: DbFindUniqueAccountOrThrowInput;
		response: { data?: DbFindUniqueAccountOrThrowResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindUniqueSession": {
		input: DbFindUniqueSessionInput;
		response: { data?: DbFindUniqueSessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindUniqueSessionOrThrow": {
		input: DbFindUniqueSessionOrThrowInput;
		response: { data?: DbFindUniqueSessionOrThrowResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindUniqueUser": {
		input: DbFindUniqueUserInput;
		response: { data?: DbFindUniqueUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindUniqueUserOrThrow": {
		input: DbFindUniqueUserOrThrowInput;
		response: { data?: DbFindUniqueUserOrThrowResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindUniqueVerificationToken": {
		input: DbFindUniqueVerificationTokenInput;
		response: { data?: DbFindUniqueVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/FindUniqueVerificationTokenOrThrow": {
		input: DbFindUniqueVerificationTokenOrThrowInput;
		response: { data?: DbFindUniqueVerificationTokenOrThrowResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/GroupByAccount": {
		input: DbGroupByAccountInput;
		response: { data?: DbGroupByAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/GroupBySession": {
		input: DbGroupBySessionInput;
		response: { data?: DbGroupBySessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/GroupByUser": {
		input: DbGroupByUserInput;
		response: { data?: DbGroupByUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/GroupByVerificationToken": {
		input: DbGroupByVerificationTokenInput;
		response: { data?: DbGroupByVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/QueryRaw": {
		input: DbQueryRawInput;
		response: { data?: DbQueryRawResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"db/QueryRawJSON": {
		input: DbQueryRawJSONInput;
		response: { data?: DbQueryRawJSONResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"users/GetAllUsers": {
		input?: undefined;
		response: { data?: UsersGetAllUsersResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"weather/GetCityById": {
		input: WeatherGetCityByIdInput;
		response: { data?: WeatherGetCityByIdResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"weather/GetCityByName": {
		input: WeatherGetCityByNameInput;
		response: { data?: WeatherGetCityByNameResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"openai/extract-website-metadata": {
		input: OpenaiExtract_website_metadataInput;
		response: {
			data?: OpenaiExtract_website_metadataResponseData;
			error?: OperationErrors["openai/extract-website-metadata"];
		};
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"openai/load-url": {
		input: OpenaiLoad_urlInput;
		response: { data?: OpenaiLoad_urlResponseData; error?: OperationErrors["openai/load-url"] };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"openai/summarize-url-content": {
		input: OpenaiSummarize_url_contentInput;
		response: {
			data?: OpenaiSummarize_url_contentResponseData;
			error?: OperationErrors["openai/summarize-url-content"];
		};
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"openai/summary": {
		input: OpenaiSummaryInput;
		response: { data?: OpenaiSummaryResponseData; error?: OperationErrors["openai/summary"] };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"openai/weather": {
		input: OpenaiWeatherInput;
		response: { data?: OpenaiWeatherResponseData; error?: OperationErrors["openai/weather"] };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"users/get": {
		input: UsersGetInput;
		response: { data?: UsersGetResponseData; error?: OperationErrors["users/get"] };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
};

export type Mutations = {
	"db/CreateManyAccount": {
		input: DbCreateManyAccountInput;
		response: { data?: DbCreateManyAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/CreateManySession": {
		input: DbCreateManySessionInput;
		response: { data?: DbCreateManySessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/CreateManyUser": {
		input: DbCreateManyUserInput;
		response: { data?: DbCreateManyUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/CreateManyVerificationToken": {
		input: DbCreateManyVerificationTokenInput;
		response: { data?: DbCreateManyVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/CreateOneAccount": {
		input: DbCreateOneAccountInput;
		response: { data?: DbCreateOneAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/CreateOneSession": {
		input: DbCreateOneSessionInput;
		response: { data?: DbCreateOneSessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/CreateOneUser": {
		input: DbCreateOneUserInput;
		response: { data?: DbCreateOneUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/CreateOneVerificationToken": {
		input: DbCreateOneVerificationTokenInput;
		response: { data?: DbCreateOneVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/DeleteManyAccount": {
		input: DbDeleteManyAccountInput;
		response: { data?: DbDeleteManyAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/DeleteManySession": {
		input: DbDeleteManySessionInput;
		response: { data?: DbDeleteManySessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/DeleteManyUser": {
		input: DbDeleteManyUserInput;
		response: { data?: DbDeleteManyUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/DeleteManyVerificationToken": {
		input: DbDeleteManyVerificationTokenInput;
		response: { data?: DbDeleteManyVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/DeleteOneAccount": {
		input: DbDeleteOneAccountInput;
		response: { data?: DbDeleteOneAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/DeleteOneSession": {
		input: DbDeleteOneSessionInput;
		response: { data?: DbDeleteOneSessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/DeleteOneUser": {
		input: DbDeleteOneUserInput;
		response: { data?: DbDeleteOneUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/DeleteOneVerificationToken": {
		input: DbDeleteOneVerificationTokenInput;
		response: { data?: DbDeleteOneVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/ExecuteRaw": {
		input: DbExecuteRawInput;
		response: { data?: DbExecuteRawResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpdateManyAccount": {
		input: DbUpdateManyAccountInput;
		response: { data?: DbUpdateManyAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpdateManySession": {
		input: DbUpdateManySessionInput;
		response: { data?: DbUpdateManySessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpdateManyUser": {
		input: DbUpdateManyUserInput;
		response: { data?: DbUpdateManyUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpdateManyVerificationToken": {
		input: DbUpdateManyVerificationTokenInput;
		response: { data?: DbUpdateManyVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpdateOneAccount": {
		input: DbUpdateOneAccountInput;
		response: { data?: DbUpdateOneAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpdateOneSession": {
		input: DbUpdateOneSessionInput;
		response: { data?: DbUpdateOneSessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpdateOneUser": {
		input: DbUpdateOneUserInput;
		response: { data?: DbUpdateOneUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpdateOneVerificationToken": {
		input: DbUpdateOneVerificationTokenInput;
		response: { data?: DbUpdateOneVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpsertOneAccount": {
		input: DbUpsertOneAccountInput;
		response: { data?: DbUpsertOneAccountResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpsertOneSession": {
		input: DbUpsertOneSessionInput;
		response: { data?: DbUpsertOneSessionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpsertOneUser": {
		input: DbUpsertOneUserInput;
		response: { data?: DbUpsertOneUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"db/UpsertOneVerificationToken": {
		input: DbUpsertOneVerificationTokenInput;
		response: { data?: DbUpsertOneVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"users/update": {
		input: UsersUpdateInput;
		response: { data?: UsersUpdateResponseData; error?: OperationErrors["users/update"] };
		requiresAuthentication: false;
	};
};

export type Subscriptions = {
	"users/subscribe": {
		input: UsersSubscribeInput;
		response: { data?: UsersSubscribeResponseData; error?: OperationErrors["users/subscribe"] };
		requiresAuthentication: false;
	};
	"countries/Continent": {
		input: CountriesContinentInput;
		response: { data?: CountriesContinentResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/Continents": {
		input: CountriesContinentsInput;
		response: { data?: CountriesContinentsResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/Countries": {
		input: CountriesCountriesInput;
		response: { data?: CountriesCountriesResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/Country": {
		input: CountriesCountryInput;
		response: { data?: CountriesCountryResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/CountryByCode": {
		input: CountriesCountryByCodeInput;
		response: { data?: CountriesCountryByCodeResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/Language": {
		input: CountriesLanguageInput;
		response: { data?: CountriesLanguageResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/Languages": {
		input: CountriesLanguagesInput;
		response: { data?: CountriesLanguagesResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/AggregateAccount": {
		input: DbAggregateAccountInput;
		response: { data?: DbAggregateAccountResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/AggregateSession": {
		input: DbAggregateSessionInput;
		response: { data?: DbAggregateSessionResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/AggregateUser": {
		input: DbAggregateUserInput;
		response: { data?: DbAggregateUserResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/AggregateVerificationToken": {
		input: DbAggregateVerificationTokenInput;
		response: { data?: DbAggregateVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstAccount": {
		input: DbFindFirstAccountInput;
		response: { data?: DbFindFirstAccountResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstAccountOrThrow": {
		input: DbFindFirstAccountOrThrowInput;
		response: { data?: DbFindFirstAccountOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstSession": {
		input: DbFindFirstSessionInput;
		response: { data?: DbFindFirstSessionResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstSessionOrThrow": {
		input: DbFindFirstSessionOrThrowInput;
		response: { data?: DbFindFirstSessionOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstUser": {
		input: DbFindFirstUserInput;
		response: { data?: DbFindFirstUserResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstUserOrThrow": {
		input: DbFindFirstUserOrThrowInput;
		response: { data?: DbFindFirstUserOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstVerificationToken": {
		input: DbFindFirstVerificationTokenInput;
		response: { data?: DbFindFirstVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstVerificationTokenOrThrow": {
		input: DbFindFirstVerificationTokenOrThrowInput;
		response: { data?: DbFindFirstVerificationTokenOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindManyAccount": {
		input: DbFindManyAccountInput;
		response: { data?: DbFindManyAccountResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindManySession": {
		input: DbFindManySessionInput;
		response: { data?: DbFindManySessionResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindManyUser": {
		input: DbFindManyUserInput;
		response: { data?: DbFindManyUserResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindManyVerificationToken": {
		input: DbFindManyVerificationTokenInput;
		response: { data?: DbFindManyVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueAccount": {
		input: DbFindUniqueAccountInput;
		response: { data?: DbFindUniqueAccountResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueAccountOrThrow": {
		input: DbFindUniqueAccountOrThrowInput;
		response: { data?: DbFindUniqueAccountOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueSession": {
		input: DbFindUniqueSessionInput;
		response: { data?: DbFindUniqueSessionResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueSessionOrThrow": {
		input: DbFindUniqueSessionOrThrowInput;
		response: { data?: DbFindUniqueSessionOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueUser": {
		input: DbFindUniqueUserInput;
		response: { data?: DbFindUniqueUserResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueUserOrThrow": {
		input: DbFindUniqueUserOrThrowInput;
		response: { data?: DbFindUniqueUserOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueVerificationToken": {
		input: DbFindUniqueVerificationTokenInput;
		response: { data?: DbFindUniqueVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueVerificationTokenOrThrow": {
		input: DbFindUniqueVerificationTokenOrThrowInput;
		response: { data?: DbFindUniqueVerificationTokenOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/GroupByAccount": {
		input: DbGroupByAccountInput;
		response: { data?: DbGroupByAccountResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/GroupBySession": {
		input: DbGroupBySessionInput;
		response: { data?: DbGroupBySessionResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/GroupByUser": {
		input: DbGroupByUserInput;
		response: { data?: DbGroupByUserResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/GroupByVerificationToken": {
		input: DbGroupByVerificationTokenInput;
		response: { data?: DbGroupByVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/QueryRaw": {
		input: DbQueryRawInput;
		response: { data?: DbQueryRawResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/QueryRawJSON": {
		input: DbQueryRawJSONInput;
		response: { data?: DbQueryRawJSONResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"users/GetAllUsers": {
		input?: undefined;
		response: { data?: UsersGetAllUsersResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"weather/GetCityById": {
		input: WeatherGetCityByIdInput;
		response: { data?: WeatherGetCityByIdResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"weather/GetCityByName": {
		input: WeatherGetCityByNameInput;
		response: { data?: WeatherGetCityByNameResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"openai/extract-website-metadata": {
		input: OpenaiExtract_website_metadataInput;
		response: { data?: OpenaiExtract_website_metadataResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"openai/load-url": {
		input: OpenaiLoad_urlInput;
		response: { data?: OpenaiLoad_urlResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"openai/summarize-url-content": {
		input: OpenaiSummarize_url_contentInput;
		response: { data?: OpenaiSummarize_url_contentResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"openai/summary": {
		input: OpenaiSummaryInput;
		response: { data?: OpenaiSummaryResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"openai/weather": {
		input: OpenaiWeatherInput;
		response: { data?: OpenaiWeatherResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"users/get": {
		input: UsersGetInput;
		response: { data?: UsersGetResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
};

export type LiveQueries = {
	"countries/Continent": {
		input: CountriesContinentInput;
		response: { data?: CountriesContinentResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/Continents": {
		input: CountriesContinentsInput;
		response: { data?: CountriesContinentsResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/Countries": {
		input: CountriesCountriesInput;
		response: { data?: CountriesCountriesResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/Country": {
		input: CountriesCountryInput;
		response: { data?: CountriesCountryResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/CountryByCode": {
		input: CountriesCountryByCodeInput;
		response: { data?: CountriesCountryByCodeResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/Language": {
		input: CountriesLanguageInput;
		response: { data?: CountriesLanguageResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"countries/Languages": {
		input: CountriesLanguagesInput;
		response: { data?: CountriesLanguagesResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/AggregateAccount": {
		input: DbAggregateAccountInput;
		response: { data?: DbAggregateAccountResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/AggregateSession": {
		input: DbAggregateSessionInput;
		response: { data?: DbAggregateSessionResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/AggregateUser": {
		input: DbAggregateUserInput;
		response: { data?: DbAggregateUserResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/AggregateVerificationToken": {
		input: DbAggregateVerificationTokenInput;
		response: { data?: DbAggregateVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstAccount": {
		input: DbFindFirstAccountInput;
		response: { data?: DbFindFirstAccountResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstAccountOrThrow": {
		input: DbFindFirstAccountOrThrowInput;
		response: { data?: DbFindFirstAccountOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstSession": {
		input: DbFindFirstSessionInput;
		response: { data?: DbFindFirstSessionResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstSessionOrThrow": {
		input: DbFindFirstSessionOrThrowInput;
		response: { data?: DbFindFirstSessionOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstUser": {
		input: DbFindFirstUserInput;
		response: { data?: DbFindFirstUserResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstUserOrThrow": {
		input: DbFindFirstUserOrThrowInput;
		response: { data?: DbFindFirstUserOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstVerificationToken": {
		input: DbFindFirstVerificationTokenInput;
		response: { data?: DbFindFirstVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindFirstVerificationTokenOrThrow": {
		input: DbFindFirstVerificationTokenOrThrowInput;
		response: { data?: DbFindFirstVerificationTokenOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindManyAccount": {
		input: DbFindManyAccountInput;
		response: { data?: DbFindManyAccountResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindManySession": {
		input: DbFindManySessionInput;
		response: { data?: DbFindManySessionResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindManyUser": {
		input: DbFindManyUserInput;
		response: { data?: DbFindManyUserResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindManyVerificationToken": {
		input: DbFindManyVerificationTokenInput;
		response: { data?: DbFindManyVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueAccount": {
		input: DbFindUniqueAccountInput;
		response: { data?: DbFindUniqueAccountResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueAccountOrThrow": {
		input: DbFindUniqueAccountOrThrowInput;
		response: { data?: DbFindUniqueAccountOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueSession": {
		input: DbFindUniqueSessionInput;
		response: { data?: DbFindUniqueSessionResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueSessionOrThrow": {
		input: DbFindUniqueSessionOrThrowInput;
		response: { data?: DbFindUniqueSessionOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueUser": {
		input: DbFindUniqueUserInput;
		response: { data?: DbFindUniqueUserResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueUserOrThrow": {
		input: DbFindUniqueUserOrThrowInput;
		response: { data?: DbFindUniqueUserOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueVerificationToken": {
		input: DbFindUniqueVerificationTokenInput;
		response: { data?: DbFindUniqueVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/FindUniqueVerificationTokenOrThrow": {
		input: DbFindUniqueVerificationTokenOrThrowInput;
		response: { data?: DbFindUniqueVerificationTokenOrThrowResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/GroupByAccount": {
		input: DbGroupByAccountInput;
		response: { data?: DbGroupByAccountResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/GroupBySession": {
		input: DbGroupBySessionInput;
		response: { data?: DbGroupBySessionResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/GroupByUser": {
		input: DbGroupByUserInput;
		response: { data?: DbGroupByUserResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/GroupByVerificationToken": {
		input: DbGroupByVerificationTokenInput;
		response: { data?: DbGroupByVerificationTokenResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/QueryRaw": {
		input: DbQueryRawInput;
		response: { data?: DbQueryRawResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"db/QueryRawJSON": {
		input: DbQueryRawJSONInput;
		response: { data?: DbQueryRawJSONResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"users/GetAllUsers": {
		input?: undefined;
		response: { data?: UsersGetAllUsersResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"weather/GetCityById": {
		input: WeatherGetCityByIdInput;
		response: { data?: WeatherGetCityByIdResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"weather/GetCityByName": {
		input: WeatherGetCityByNameInput;
		response: { data?: WeatherGetCityByNameResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"openai/extract-website-metadata": {
		input: OpenaiExtract_website_metadataInput;
		response: { data?: OpenaiExtract_website_metadataResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"openai/load-url": {
		input: OpenaiLoad_urlInput;
		response: { data?: OpenaiLoad_urlResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"openai/summarize-url-content": {
		input: OpenaiSummarize_url_contentInput;
		response: { data?: OpenaiSummarize_url_contentResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"openai/summary": {
		input: OpenaiSummaryInput;
		response: { data?: OpenaiSummaryResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"openai/weather": {
		input: OpenaiWeatherInput;
		response: { data?: OpenaiWeatherResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"users/get": {
		input: UsersGetInput;
		response: { data?: UsersGetResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
};

export interface Operations
	extends OperationsDefinition<Queries, Mutations, Subscriptions, LiveQueries, UserRole, {}> {}
