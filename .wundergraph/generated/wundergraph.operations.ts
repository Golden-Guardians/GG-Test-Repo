// Code generated by wunderctl. DO NOT EDIT.

import type {
	BaseOperationConfiguration,
	ConfigureQuery,
	ConfigureSubscription,
	ConfigureMutation,
	CustomizeQuery,
	CustomizeMutation,
	CustomizeSubscription,
	QueryConfiguration,
	SubscriptionConfiguration,
	MutationConfiguration,
	WunderGraphOperationsConfig,
} from "@wundergraph/sdk";

export interface OperationsConfiguration {
	// defaultConfig is the base for all configurations
	// all configuration shared across queries, mutations and subscriptions can be done in the default config
	defaultConfig: BaseOperationConfiguration;

	// queries lets you define the base config for all Queries
	// the input config is the defaultConfig object
	queries: ConfigureQuery;

	mutations: ConfigureMutation;
	subscriptions: ConfigureSubscription;

	// custom allows you to override settings for each individual operation
	// the input config is the default config + the query/mutation/subscription extra config
	custom?: {
		CountriesContinent?: CustomizeQuery;
		CountriesContinents?: CustomizeQuery;
		CountriesCountries?: CustomizeQuery;
		CountriesCountry?: CustomizeQuery;
		CountriesCountryByCode?: CustomizeQuery;
		CountriesLanguage?: CustomizeQuery;
		CountriesLanguages?: CustomizeQuery;
		DbAggregateAccount?: CustomizeQuery;
		DbAggregateSession?: CustomizeQuery;
		DbAggregateUser?: CustomizeQuery;
		DbAggregateVerificationToken?: CustomizeQuery;
		DbCreateManyAccount?: CustomizeMutation;
		DbCreateManySession?: CustomizeMutation;
		DbCreateManyUser?: CustomizeMutation;
		DbCreateManyVerificationToken?: CustomizeMutation;
		DbCreateOneAccount?: CustomizeMutation;
		DbCreateOneSession?: CustomizeMutation;
		DbCreateOneUser?: CustomizeMutation;
		DbCreateOneVerificationToken?: CustomizeMutation;
		DbDeleteManyAccount?: CustomizeMutation;
		DbDeleteManySession?: CustomizeMutation;
		DbDeleteManyUser?: CustomizeMutation;
		DbDeleteManyVerificationToken?: CustomizeMutation;
		DbDeleteOneAccount?: CustomizeMutation;
		DbDeleteOneSession?: CustomizeMutation;
		DbDeleteOneUser?: CustomizeMutation;
		DbDeleteOneVerificationToken?: CustomizeMutation;
		DbExecuteRaw?: CustomizeMutation;
		DbFindFirstAccount?: CustomizeQuery;
		DbFindFirstAccountOrThrow?: CustomizeQuery;
		DbFindFirstSession?: CustomizeQuery;
		DbFindFirstSessionOrThrow?: CustomizeQuery;
		DbFindFirstUser?: CustomizeQuery;
		DbFindFirstUserOrThrow?: CustomizeQuery;
		DbFindFirstVerificationToken?: CustomizeQuery;
		DbFindFirstVerificationTokenOrThrow?: CustomizeQuery;
		DbFindManyAccount?: CustomizeQuery;
		DbFindManySession?: CustomizeQuery;
		DbFindManyUser?: CustomizeQuery;
		DbFindManyVerificationToken?: CustomizeQuery;
		DbFindUniqueAccount?: CustomizeQuery;
		DbFindUniqueAccountOrThrow?: CustomizeQuery;
		DbFindUniqueSession?: CustomizeQuery;
		DbFindUniqueSessionOrThrow?: CustomizeQuery;
		DbFindUniqueUser?: CustomizeQuery;
		DbFindUniqueUserOrThrow?: CustomizeQuery;
		DbFindUniqueVerificationToken?: CustomizeQuery;
		DbFindUniqueVerificationTokenOrThrow?: CustomizeQuery;
		DbGroupByAccount?: CustomizeQuery;
		DbGroupBySession?: CustomizeQuery;
		DbGroupByUser?: CustomizeQuery;
		DbGroupByVerificationToken?: CustomizeQuery;
		DbQueryRaw?: CustomizeQuery;
		DbQueryRawJSON?: CustomizeQuery;
		DbUpdateManyAccount?: CustomizeMutation;
		DbUpdateManySession?: CustomizeMutation;
		DbUpdateManyUser?: CustomizeMutation;
		DbUpdateManyVerificationToken?: CustomizeMutation;
		DbUpdateOneAccount?: CustomizeMutation;
		DbUpdateOneSession?: CustomizeMutation;
		DbUpdateOneUser?: CustomizeMutation;
		DbUpdateOneVerificationToken?: CustomizeMutation;
		DbUpsertOneAccount?: CustomizeMutation;
		DbUpsertOneSession?: CustomizeMutation;
		DbUpsertOneUser?: CustomizeMutation;
		DbUpsertOneVerificationToken?: CustomizeMutation;
		UsersGetAllUsers?: CustomizeQuery;
		WeatherGetCityById?: CustomizeQuery;
		WeatherGetCityByName?: CustomizeQuery;
		OpenaiExtract_website_metadata?: CustomizeQuery;
		OpenaiLoad_url?: CustomizeQuery;
		OpenaiSummarize_url_content?: CustomizeQuery;
		OpenaiSummary?: CustomizeQuery;
		OpenaiWeather?: CustomizeQuery;
		UsersGet?: CustomizeQuery;
		UsersSubscribe?: CustomizeSubscription;
		UsersUpdate?: CustomizeMutation;
	};
}

declare module "@wundergraph/sdk" {
	interface CustomOperationsConfiguration {
		CountriesContinent?: Partial<QueryConfiguration>;
		CountriesContinents?: Partial<QueryConfiguration>;
		CountriesCountries?: Partial<QueryConfiguration>;
		CountriesCountry?: Partial<QueryConfiguration>;
		CountriesCountryByCode?: Partial<QueryConfiguration>;
		CountriesLanguage?: Partial<QueryConfiguration>;
		CountriesLanguages?: Partial<QueryConfiguration>;
		DbAggregateAccount?: Partial<QueryConfiguration>;
		DbAggregateSession?: Partial<QueryConfiguration>;
		DbAggregateUser?: Partial<QueryConfiguration>;
		DbAggregateVerificationToken?: Partial<QueryConfiguration>;
		DbCreateManyAccount?: Partial<MutationConfiguration>;
		DbCreateManySession?: Partial<MutationConfiguration>;
		DbCreateManyUser?: Partial<MutationConfiguration>;
		DbCreateManyVerificationToken?: Partial<MutationConfiguration>;
		DbCreateOneAccount?: Partial<MutationConfiguration>;
		DbCreateOneSession?: Partial<MutationConfiguration>;
		DbCreateOneUser?: Partial<MutationConfiguration>;
		DbCreateOneVerificationToken?: Partial<MutationConfiguration>;
		DbDeleteManyAccount?: Partial<MutationConfiguration>;
		DbDeleteManySession?: Partial<MutationConfiguration>;
		DbDeleteManyUser?: Partial<MutationConfiguration>;
		DbDeleteManyVerificationToken?: Partial<MutationConfiguration>;
		DbDeleteOneAccount?: Partial<MutationConfiguration>;
		DbDeleteOneSession?: Partial<MutationConfiguration>;
		DbDeleteOneUser?: Partial<MutationConfiguration>;
		DbDeleteOneVerificationToken?: Partial<MutationConfiguration>;
		DbExecuteRaw?: Partial<MutationConfiguration>;
		DbFindFirstAccount?: Partial<QueryConfiguration>;
		DbFindFirstAccountOrThrow?: Partial<QueryConfiguration>;
		DbFindFirstSession?: Partial<QueryConfiguration>;
		DbFindFirstSessionOrThrow?: Partial<QueryConfiguration>;
		DbFindFirstUser?: Partial<QueryConfiguration>;
		DbFindFirstUserOrThrow?: Partial<QueryConfiguration>;
		DbFindFirstVerificationToken?: Partial<QueryConfiguration>;
		DbFindFirstVerificationTokenOrThrow?: Partial<QueryConfiguration>;
		DbFindManyAccount?: Partial<QueryConfiguration>;
		DbFindManySession?: Partial<QueryConfiguration>;
		DbFindManyUser?: Partial<QueryConfiguration>;
		DbFindManyVerificationToken?: Partial<QueryConfiguration>;
		DbFindUniqueAccount?: Partial<QueryConfiguration>;
		DbFindUniqueAccountOrThrow?: Partial<QueryConfiguration>;
		DbFindUniqueSession?: Partial<QueryConfiguration>;
		DbFindUniqueSessionOrThrow?: Partial<QueryConfiguration>;
		DbFindUniqueUser?: Partial<QueryConfiguration>;
		DbFindUniqueUserOrThrow?: Partial<QueryConfiguration>;
		DbFindUniqueVerificationToken?: Partial<QueryConfiguration>;
		DbFindUniqueVerificationTokenOrThrow?: Partial<QueryConfiguration>;
		DbGroupByAccount?: Partial<QueryConfiguration>;
		DbGroupBySession?: Partial<QueryConfiguration>;
		DbGroupByUser?: Partial<QueryConfiguration>;
		DbGroupByVerificationToken?: Partial<QueryConfiguration>;
		DbQueryRaw?: Partial<QueryConfiguration>;
		DbQueryRawJSON?: Partial<QueryConfiguration>;
		DbUpdateManyAccount?: Partial<MutationConfiguration>;
		DbUpdateManySession?: Partial<MutationConfiguration>;
		DbUpdateManyUser?: Partial<MutationConfiguration>;
		DbUpdateManyVerificationToken?: Partial<MutationConfiguration>;
		DbUpdateOneAccount?: Partial<MutationConfiguration>;
		DbUpdateOneSession?: Partial<MutationConfiguration>;
		DbUpdateOneUser?: Partial<MutationConfiguration>;
		DbUpdateOneVerificationToken?: Partial<MutationConfiguration>;
		DbUpsertOneAccount?: Partial<MutationConfiguration>;
		DbUpsertOneSession?: Partial<MutationConfiguration>;
		DbUpsertOneUser?: Partial<MutationConfiguration>;
		DbUpsertOneVerificationToken?: Partial<MutationConfiguration>;
		UsersGetAllUsers?: Partial<QueryConfiguration>;
		WeatherGetCityById?: Partial<QueryConfiguration>;
		WeatherGetCityByName?: Partial<QueryConfiguration>;
		OpenaiExtract_website_metadata?: Partial<QueryConfiguration>;
		OpenaiLoad_url?: Partial<QueryConfiguration>;
		OpenaiSummarize_url_content?: Partial<QueryConfiguration>;
		OpenaiSummary?: Partial<QueryConfiguration>;
		OpenaiWeather?: Partial<QueryConfiguration>;
		UsersGet?: Partial<QueryConfiguration>;
		UsersSubscribe?: Partial<SubscriptionConfiguration>;
		UsersUpdate?: Partial<MutationConfiguration>;
	}

	export function configureWunderGraphOperations<GeneratedOperationConfiguration extends OperationsConfiguration>(
		config: WunderGraphOperationsConfig<GeneratedOperationConfiguration>
	): WunderGraphOperationsConfig<GeneratedOperationConfiguration>["operations"];
}
