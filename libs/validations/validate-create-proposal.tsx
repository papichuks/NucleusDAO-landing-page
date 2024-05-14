export const ValidateProposalForm: any = {
  0: ({ form }: any) => validateTransfer({ form }),
  1: ({ form }: any) => validateMember({ form }),
  2: ({ form }: any) => validateMember({ form }),
  3: ({ form }: any) => validateChangeVotingTime({ form }),
  4: ({ form }: any) => validateChangeQuorum({ form }),
  5: ({ form }: any) => validateChangeDAOName({ form }),
  6: ({ form }: any) => validateChangeDAOLogo({ form }),
  7: ({ form }: any) => validateChangeSocialMedia({ form }),
  8: ({ form }: any) => validateCustom({ form }),
};

export const validateTransfer = ({ form }: any) => {
  const targetWallet = form.getValues('targetWallet');
  const value = form.getValues('value');

  if (
    targetWallet.length >= 51 &&
    targetWallet.length <= 53 &&
    !!Number(value)
  ) {
    return true;
  }
  if (targetWallet.length < 51 || targetWallet.length > 53) {
    form.setError('targetWallet', {
      type: 'onChange',
      message: 'Wallet address must be between 51 - 53 characters',
    });
    return false;
  }
  if (targetWallet.length < 51 || targetWallet.length > 53) {
    form.setError('targetWallet', {
      type: 'onChange',
      message: 'Wallet address must be between 51 - 53 characters',
    });
    return false;
  }
  if (!Number(value)) {
    form.setError('value', {
      type: 'onChange',
      message: 'Field is required',
    });
    return false;
  }
};

export const validateMember = ({ form }: any) => {
  const targetWallet = form.getValues('targetWallet');

  if (targetWallet.length >= 51 && targetWallet.length <= 53) {
    return true;
  }
  if (targetWallet.length < 51 || targetWallet.length > 53) {
    form.setError('targetWallet', {
      type: 'onChange',
      message: 'Wallet address must be between 51 - 53 characters',
    });
    return false;
  }
  if (targetWallet.length < 51 || targetWallet.length > 53) {
    form.setError('targetWallet', {
      type: 'onChange',
      message: 'Wallet address must be between 51 - 53 characters',
    });
    return false;
  }
};

export const validateChangeVotingTime = ({ form }: any) => {
  if (!!Number(form.getValues('maximum'))) {
    return true;
  } else {
    if (form.getValues('maximum') === '0') {
      form.setError('maximum', {
        type: 'onChange',
        message: 'Field must not be 0',
      });
    } else if (!form.getValues('maximum')) {
      form.setError('maximum', {
        type: 'onChange',
        message: 'Field is required',
      });
    }
    return false;
  }
};

export const validateChangeQuorum = ({ form }: any) => {
  if (!!Number(form.getValues('quorum'))) {
    return true;
  } else {
    if (form.getValues('quorum') === '0') {
      form.setError('quorum', {
        type: 'onChange',
        message: 'Field must not be 0',
      });
    } else if (!form.getValues('quorum')) {
      form.setError('quorum', {
        type: 'onChange',
        message: 'Field is required',
      });
    }
    return false;
  }
};

export const validateChangeDAOName = ({ form }: any) => {
  if (form.getValues('newName')) {
    return true;
  } else {
    form.setError('newName', {
      type: 'onChange',
      message: 'Field is required',
    });

    return false;
  }
};

export const validateChangeDAOLogo = ({ form }: any) => {
  if (form.getValues('logo')) {
    return true;
  } else {
    form.setError('logo', {
      type: 'onChange',
      message: 'Field is required',
    });

    return false;
  }
};

export const validateChangeSocialMedia = ({ form }: any) => {
  console.log(form.getValues('socialMedia'));
  const socialMedia = form.getValues('socialMedia');

  const isEmptySocialMediaLink = socialMedia.some(
    (item: { link: string; type: string }) => item.link === ''
  );
  const isEmptySocialMediaLink2 = socialMedia.some(
    (item: { link: string; type: string }) => !item.link.startsWith('https://')
  );
  const indexLink = socialMedia.findIndex(
    (item: { link: string; type: string }) => item.link === ''
  );
  const indexLink2 = socialMedia.findIndex(
    (item: { link: string; type: string }) => !item.link.startsWith('https://')
  );
  const isEmptySocialMediaType = socialMedia.some(
    (item: { link: string; type: string }) => item.type === ''
  );
  const indexType = socialMedia.findIndex(
    (item: { link: string; type: string }) => item.type === ''
  );
  if (isEmptySocialMediaLink) {
    form.setError(`socialMedia.${indexLink}.link`, {
      type: 'onChange',
      message: 'Field should not be empty',
    });
    return false;
  } else if (isEmptySocialMediaType) {
    form.setError(`socialMedia.${indexType}.type`, {
      type: 'onChange',
      message: 'Field should not be empty',
    });
    return false;
  } else if (isEmptySocialMediaLink2) {
    form.setError(`socialMedia.${indexLink2}.link`, {
      type: 'onChange',
      message: 'Field should start with https://',
    });
  } else {
    return true;
  }
};

export const validateCustom = ({ form }: any) => {
  const description = form.getValues('description');

  if (description) {
    form.setError('description', {
      type: 'onChange',
      message: 'Field is required',
    });
    return true;
  }
  return false;
};
