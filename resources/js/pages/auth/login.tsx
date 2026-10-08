import { Form, Head } from '@inertiajs/react';
import { GoogleLoginButton } from '@/components/google-login-button';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import PasskeyVerify from '@/components/passkey-verify';

type Props = {
    status?: string;
    canResetPassword: boolean;
    googleError?: string;
};

export default function Login({ status, canResetPassword, googleError }: Props) {
    return (
        <>
            <Head title="Connexion" />

            <div className="mb-6 flex flex-col gap-6">
                {googleError && (
                    <p
                        role="alert"
                        className="rounded-lg border border-pagne-red/30 bg-pagne-red/5 px-4 py-3 text-sm text-pagne-red"
                    >
                        {googleError}
                    </p>
                )}
                <GoogleLoginButton label="Continuer avec Google" />
                <PasskeyVerify
                    label="Continuer avec une clé d’accès"
                    loadingLabel="Vérification en cours…"
                    separator="ou avec votre adresse e-mail"
                />
            </div>

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label
                                    htmlFor="email"
                                    className="font-mono text-xs tracking-wider text-cream/50 uppercase"
                                >
                                    Adresse e-mail
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="nom@exemple.fr"
                                    className="h-14 rounded-xl border-cream/15 bg-white/6 px-4 text-cream placeholder:text-cream/30 focus-visible:border-pagne-gold focus-visible:ring-pagne-gold/20"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label
                                    htmlFor="password"
                                    className="font-mono text-xs tracking-wider text-cream/50 uppercase"
                                >
                                    Mot de passe
                                </Label>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Votre mot de passe"
                                    className="h-14 rounded-xl border-cream/15 bg-white/6 px-4 text-cream placeholder:text-cream/30 focus-visible:border-pagne-gold focus-visible:ring-pagne-gold/20"
                                />
                                <InputError message={errors.password} />
                                {canResetPassword && (
                                    <TextLink
                                        href={request()}
                                        className="self-end text-sm"
                                        tabIndex={5}
                                    >
                                        Mot de passe oublié ?
                                    </TextLink>
                                )}
                            </div>

                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                    className="border-cream/30 data-[state=checked]:border-pagne-gold data-[state=checked]:bg-pagne-gold focus-visible:ring-pagne-gold/40"
                                />
                                <Label htmlFor="remember" className="text-cream/60">Se souvenir de moi</Label>
                            </div>

                            <Button
                                type="submit"
                                className="mt-2 h-14 w-full rounded-full bg-pagne-red font-bold text-cream uppercase hover:bg-pagne-red/90"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing && <Spinner />}
                                Me connecter
                            </Button>
                        </div>

                        <div className="text-center text-sm text-cream/40">
                            Pas encore de compte ?{' '}
                            <TextLink href={register()} tabIndex={5}>
                                Créer un compte
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-pagne-green">
                    {status}
                </div>
            )}
        </>
    );
}

Login.layout = {
    title: 'Connexion',
    description: 'Connectez-vous à votre compte Xwégbé.',
};
