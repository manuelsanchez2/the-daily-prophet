<script lang="ts">

    import dailyProphet from '$assets/logo-the-daily-prophet.webp';
    import siriusVideo from '$assets/videos/sirius-wanted.mp4';
	import GridDebug from '$lib/components/GridDebug.svelte';
	import NoisyBackground from '$lib/components/NoisyBackground.svelte';

</script>
<div class="relative border border-gray-400 p-z-ds-20 pb-0 bg-yellow-400 max-w-5xl mx-auto" style="filter: sepia(90%)">
    <!-- <div class="relative border border-gray-400 p-z-ds-20 min-h-screen max-w-5xl mx-auto"> -->
        <NoisyBackground />
        <GridDebug active={false} />
    
        <figure class="z-30">
            <img class="brightness-0" src={dailyProphet} alt="The Daily Prophet Logo" />
        </figure>
    
        <div class="px-z-ds-12">
    
            <div class="my-z-ds-32 px-z-ds-24 py-z-ds-16 border-4 border-black w-full">
                <h1 class="text-8xl lg:text-[160px] leading-none font-bold font-headline uppercase lg:mb-z-ds-24">Out of Azkaban</h1>
    
                <div class="grid lg:grid-cols-5 lg:gap-z-ds-24 mt-z-ds-12 text-justify -mb-z-ds-24">
    
                    <div class="lg:col-span-2 lg:columns-2">
    
                        <div>
                            <p class="mb-3">
                                Sirius Black’s escape from Azkaban sent shockwaves throughout the wizarding world. Up until that moment, the infamous wizard had been thought of as one of the most dangerous and malevolent criminals ever to be locked away in the soul-crushing prison. For twelve years, Black had languished in his cell, presumed guilty of one of the greatest betrayals in recent magical history—the betrayal of James and Lily Potter, which led to their deaths at the hands of Lord Voldemort. To make matters worse, it was believed that in his desperate attempt to escape justice, Sirius had murdered twelve innocent Muggles in broad daylight, leaving only one finger of Peter Pettigrew, his supposed final victim, as evidence of the massacre. When news of his escape broke, the wizarding world was plunged into fear and panic. Sirius Black was not just a convict; he was a man tied to the darkest chapter of recent magical history. He had been the Potter family's trusted friend, even named godfather to their son, Harry. But in a shocking twist, he was revealed as the one who had handed over James and Lily to Voldemort, condemning them to death and leaving Harry an orphan. The mere idea that such a close confidant of the Potters could have betrayed them so callously intensified the fear surrounding him.
                            </p>
            
                            <div class="mt-z-ds-16 flex flex-col sm:flex-row lg:flex-col gap-z-ds-12">
                                <span class="font-letter text-[120px] lg:text-[200px] leading-none">H</span>
                                <p class="-mt-4 sm:mt-0 lg:-mt-10">
                                    The Ministry of Magic issued warnings far and wide, and Azkaban's strict security measures, meant to be impenetrable, had somehow failed to contain him. Sirius Black was now at large, and there was only one possible target: Harry Potter, the Boy Who Lived. Many believed that Black was driven by a twisted loyalty to the Dark Lord. Voldemort may have fallen, but his followers, including those who had been imprisoned, never forgot their mission. Rumors swirled that Black’s escape was part of a plan to seek out Harry, finish what Voldemort had started, and kill the boy who had miraculously survived that fatal night.
                                </p>
                            </div>
                        </div>
    
                    </div>
              
                    <div class="lg:col-span-3 lg:pl-z-ds-4 my-z-ds-16 lg:my-0">
                        <!-- svelte-ignore a11y_media_has_caption -->
                        <video class="w-full" src={siriusVideo} autoplay loop controls playsinline></video>

                        <p class="special mt-z-ds-24 lg:mt-z-ds-12 first-letter:font-letter first-letter:text-[120px] lg:first-letter:text-[160px] first-letter:float-start first-letter:mr-z-ds-4">
                            Despite the Ministry’s reassurances and the presence of the Dementors, Harry couldn’t shake the feeling that something was amiss. His life at Hogwarts, normally filled with the usual mischief, classes, and adventures with his friends, Ron Weasley and Hermione Granger, had taken on a darker tone. Whispers of Sirius Black reached his ears at every turn. There was no escaping the looming threat of Black.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>