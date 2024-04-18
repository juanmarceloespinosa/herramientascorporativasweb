declare interface Window {
	grecaptcha: {
		ready(cb: () => void);
		execute(key: string, opts: { action: string }): Promise<string>;
	};
}
