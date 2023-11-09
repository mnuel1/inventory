import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import '../../../css/font.css'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout >
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600 ">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <div className='flex gap-2'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAt0lEQVR4nNXSPUoDQRiA4QHtFnRTbZfkADaiuUDSWEdIbpDaehtb7yR6Aj3LpglssfDIwIKCm+hMwJ8XPhjYnaf5JoR/H6bY9DM5FrvFznvxvMzFzrH1uQZnOeDC/uY54NUB8DIHPMXrAPaCk2QwFreK5w/YE8bh2DCKE/5cKHCBm37iuUhFStzhEe3AUtr+W/yn/Apb9w/3uzVY7cNm6KTX4XoIrOVX/whY4R4PiRPvVEmb/9XeAEqsH9gVu21qAAAAAElFTkSuQmCC"/>
                        <InputLabel htmlFor="username" value="Username" />
                    </div>
                   
                    <TextInput
                        id="username"
                        type="text"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('username', e.target.value)}
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <div className='flex gap-2'>
                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNNyw1Yy0zLjg2NiwwIC03LDMuMTM0IC03LDdjMCwzLjg2NiAzLjEzNCw3IDcsN2MzLjE3MDY3LDAgNS44NDYxNywtMi4xMDkwMSA2LjcwNzAzLC01aDQuMjkyOTd2M2g0di0zaDJ2LTRoLTEwLjI5Mjk3Yy0wLjg2MDg2LC0yLjg5MDk5IC0zLjUzNjM2LC01IC02LjcwNzAzLC01ek03LDljMS42NTcsMCAzLDEuMzQzIDMsM2MwLDEuNjU3IC0xLjM0MywzIC0zLDNjLTEuNjU3LDAgLTMsLTEuMzQzIC0zLC0zYzAsLTEuNjU3IDEuMzQzLC0zIDMsLTN6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>
                        <InputLabel htmlFor="password" value="Password" />
                    </div>
                    

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex justify-between mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-white">Remember me</span>
                    </label>
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-white hover:text-gray-200  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 no-underline"
                        >
                            <span className="ml-2 text-sm "> Forgot your password? </span>
                        </Link>
                </div>

                <div className="flex items-center justify-center mt-4">
                    {/* {canResetPassword && ( */}
                        
                    {/* )} */}

                    <PrimaryButton className="ml-4" disabled={processing}>
                        <p className='text-red-900'>Log in</p>
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
