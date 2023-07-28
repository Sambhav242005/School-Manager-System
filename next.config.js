module.exports = {
    output: 'export',
    experimental: {
        images: {
            unoptimized: true,
        },
    },
    warnings: {
        staticOptimization: 'off' | 'warn' | 'error',
    }
};
