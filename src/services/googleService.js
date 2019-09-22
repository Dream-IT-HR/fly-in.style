import authenticationService from './authenticationService';

async function handleGoogleResponseAsync (response) {
  if (!response.tokenId) {
    console.error("Unable to get tokenId from Google", response)
    return;
  }

  const tokenBlob = new Blob([JSON.stringify({ tokenId: response.tokenId }, null, 2)], { type: 'application/json' });

  const options = {
    method: 'POST',
    body: tokenBlob,
    mode: 'cors',
    cache: 'default'
  };

  await authenticationService.LoginWithGoogleAsync(options);
};

let googleService = {
  handleGoogleResponseAsync
};

export default googleService;