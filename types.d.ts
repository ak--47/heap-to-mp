interface Config {
    /**
     * bucket to look in
     */
    bucket: string;
	/**
     * path to cloud file
     */
    filePath: string;
    /**
     * region for data residency
     */
    region: "US" | "EU";
    /**
     * mixpanel project
     */
    project: number | string;
    /**
     * mixpanel token
     */
    token: string;
    /**
     * mixpanel secret
     */
    secret: string;
    /**
     * job name (cloud only)
     */
    name: string;
    /**
     * job id (cloud only)
     */
    id: string;
    /**
     * streaming watermark
     */
	type: 'event' | 'user' | 'group';
    /**
     * streaming watermark
     */
    highWaterMark?: number;
	verbose?: boolean;
	cleanup?: boolean;
}

