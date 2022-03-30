// DOCUMENTATION: https://intelligize.atlassian.net/wiki/spaces/IN/pages/92635137/Redux+Actions

export const asyncActionType = (type: any) => ({
    PENDING: `${type} - Pending`,
    SUCCESS: `${type} - Success`,
    ERROR: `${type} - Error`,
});
