import { Form, Head } from '@inertiajs/react';
import { GoogleLoginButton } from '@/components/google-login-button';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

type Props = {
    passwordRules: string;
};

const INPUT_CLS = 'h-14 rounded-xl border-cream/15 bg-white/6 px-4 text-cream placeholder:text-cream/30 focus-visible:border-pagne-gold focus-visible:ring-pagne-gold/20';
const LABEL_CLS = 'font-mono text-xs tracking-wider text-cream/50 uppercase';

export default function Register({ passwordRules }: Props) {
    return (
        <>
            <Head title="Inscription" />

            <div className="mb-6 flex flex-col gap-6">
                <GoogleLoginButton label="S'inscrire avec Google" />

                <div className="relative text-center text-sm text-cream/30 after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-cream/10">
                    <span className="relative z-10 bg-night px-3">
                        ou
                    </span>
                </div>
            </div>

            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-5">
                            <div className="grid gap-2">
                                <Label htmlFor="name" className={LABEL_CLS}>Nom complet</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    name="name"
                                    placeholder="Votre nom"
                                    className={INPUT_CLS}
                                />
                                <InputError message={errors.name} className="mt-1" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email" className={LABEL_CLS}>Adresse e-mail</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="nom@exemple.fr"
                                    className={INPUT_CLS}
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password" className={LABEL_CLS}>Mot de passe</Label>
                                <PasswordInput
                                    id="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="Choisissez un mot de passe"
                                    passwordrules={passwordRules}
                                    className={INPUT_CLS}
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation" className={LABEL_CLS}>Confirmer le mot de passe</Label>
                                <PasswordInput
                                    id="password_confirmation"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="Confirmez votre mot de passe"
                                    passwordrules={passwordRules}
                                    className={INPUT_CLS}
                                />
                                <InputError message={errors.password_confirmation} />
                            </div>

                            <Button
                                type="submit"
                                className="mt-2 h-14 w-full rounded-full bg-pagne-red font-bold text-cream uppercase hover:bg-pagne-red/90"
                                tabIndex={5}
                                data-test="register-user-button"
                                disabled={processing}
                            >
                                {processing && <Spinner />}
                                Créer mon compte
                            </Button>
                        </div>

                        <div className="text-center text-sm text-cream/40">
                            Déjà un compte ?{' '}
                            <TextLink href={login()} tabIndex={6}>
                                Se connecter
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </>
    );
}

Register.layout = {
    title: 'Créer un compte',
    description: 'Rejoignez Xwégbé — le Bénin, aujourd\'hui.',
};
