import * as express from 'express';
import { AcceptedLanguagesService } from '../../cross-platform/languages/services/accepted-languages.service';

export const languageRedirect = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const acceptedLanguagesService = new AcceptedLanguagesService();
  const currentLangId = req.path.split('/')[1];
  const acceptedLangIds = acceptedLanguagesService.getAcceptedLangIds();

  if (!acceptedLangIds.includes(currentLangId)) {
    const trimUrl = req.path === '/' ? '' : req.path;
    res.redirect(302, `/${acceptedLanguagesService.getDefaultLangId()}${trimUrl}`);
    return;
  }

  next();
};
