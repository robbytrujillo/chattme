import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="chattMe App" />
            <div className="flex">
                <div className="w-2/6 bg-gray-900 border-r border-gray-800">
                    <div className="flex flex-col h-screen pt-4">
                        <div className="px-4">
                            <div className="flex justify-between mb-2">
                                <h1 className="text-xl font-bold text-white">
                                    chattMe
                                </h1>
                                <div># Settings #</div>
                            </div>
                            # SEARCH #
                        </div>
                        <div className="flex-1 px-4 overflow-y-auto">
                            # ROOM #
                        </div>
                    </div>
                </div>
                <div className="relative w-4/6"># CHAT #</div>
            </div>
        </AuthenticatedLayout>
    );
}
