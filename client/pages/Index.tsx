import Reveal from "@/components/anim/Reveal";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SideTOC } from "@/components/site/SideTOC";
import { CurvySeparator, Timeline, Comparison, CriteriaGrid, QuoteMarquee } from "@/components/site/Sections";
import TiltCard from "@/components/effects/TiltCard";
import { BookOpen, Landmark, Layers, Users, Hammer, ListChecks, Quote, Lightbulb, ShieldAlert, CheckCircle2 } from "lucide-react";

function Section({ id, icon: Icon, title, children, variant = "glass" }: { id: string; icon: any; title: string; children: React.ReactNode; variant?: "glass" | "gradient" | "outline" | "elevated" }) {
  const base = "relative overflow-hidden rounded-2xl p-8 md:p-10 backdrop-blur space-y-3 md:space-y-4";
  const variants: Record<string, string> = { glass: "border bg-card/60 shadow-sm", gradient: "gradient-border bg-gradient-to-br from-secondary/40 via-background to-accent/40", outline: "border bg-background", elevated: "border bg-card/80 shadow-lg" };
  return (
    <section id={id} className="scroll-mt-24">
      <Reveal>
        <div className={[base, variants[variant]].join(" ")}>
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary-foreground shadow-sm">
              <Icon className="h-5 w-5 text-foreground/80" />
            </span>
            <h2 className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-xl font-bold tracking-tight text-transparent">{title}</h2>
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
            {children}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Index() {
  return (
    <div>
      <SideTOC />
      {/* Hero */}
      <div className="relative">
        <div className="container relative flex min-h-[60svh] flex-col items-center justify-center gap-8 py-16 text-center md:min-h-[72svh]">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-foreground/70 backdrop-blur">
                <Quote className="h-3.5 w-3.5" />
              </span>
              <h1 className="mt-4 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl">
                Câu hỏi hôm nay: “Nhà nước nào là nhà nước toàn dân, của mọi giai cấp?”
              </h1>
              <p className="mt-4 text-base text-foreground/70 md:text-lg">
                Trả lời theo Triết học Mác‑Lênin bằng lập luận chặt chẽ, dẫn liệu lịch sử và tiêu chí nhận diện bản chất giai cấp của nhà nước.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a href="#mo-dau">
                  <Button className="shadow-sm">Bắt đầu</Button>
                </a>
                <a href="#tieu-chi">
                  <Button variant="secondary">Tiêu chí nhận diện</Button>
                </a>
              </div>
            </div>
          </Reveal>
          <div className="pointer-events-none absolute -top-8 left-16 hidden h-24 w-24 animate-float rounded-full bg-primary/25 blur-xl md:block" />
          <div className="pointer-events-none absolute bottom-6 right-24 hidden h-28 w-28 animate-float rounded-full bg-accent/25 blur-xl md:block" />
        </div>
        <CurvySeparator />
      </div>

      <div className="container grid gap-16 pb-24">
        <Section id="mo-dau" icon={Lightbulb} title="Mở đầu" variant="gradient">
          <QuoteMarquee text="Giáo trình Triết học Mác‑Lênin · Marxists.org" />
          <p className="mt-3">
            Vấn đề — “Theo các bạn, nhà nước nào là nhà nước toàn dân, nhà nước của mọi giai cấp?”
          </p>
          <p className="mt-3" hidden>
            Chúng ta sẽ trả lời trên cơ sở phân tích khái niệm nhà nước theo triết học Mác‑Lênin, minh họa bằng vài dẫn liệu lịch sử và nêu tiêu chí nhận diện bản chất giai cấp của nhà nước.
          </p>
        </Section>

        <Section id="khai-niem" icon={Landmark} title="Khái niệm và bản chất nhà nước" variant="outline">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mt-0 text-base font-semibold">Định nghĩa</h3>
              <p>Nhà nước là tổ chức quyền lực công cộng có tính cưỡng chế (bộ máy hành chính, tư pháp, lực lượng vũ trang), ra đời khi xã hội phân chia thành giai cấp.</p>
              <h3 className="mt-4 text-base font-semibold">Nguồn gốc ra đời</h3>
              <ul>
                <li>Phân công lao động xã hội dẫn tới tư hữu và phân hoá lợi ích.</li>
                <li>Mâu thuẫn giai cấp không thể tự điều hoà ⇒ xuất hiện quyền lực tách khỏi xã hội để duy trì trật tự theo lợi ích chi phối.</li>
              </ul>
              <h3 className="mt-4 text-base font-semibold">Đặc trưng cơ bản</h3>
              <ul>
                <li>Quyền lực công cộng tách khỏi xã hội với bộ máy chuyên nghiệp.</li>
                <li>Chủ quyền lãnh thổ; thuế khoá và tài chính công ổn định.</li>
                <li>Hệ thống pháp luật, toà án, cưỡng chế nhà nước.</li>
              </ul>
              <h3 className="mt-4 text-base font-semibold">Chức năng cơ bản</h3>
              <ul>
                <li>Đối nội: duy trì trật tự, bảo vệ quan hệ sở hữu và địa vị giai cấp.</li>
                <li>Đối ngoại: bảo vệ lợi ích quốc gia/giai cấp trong quan hệ quốc tế.</li>
              </ul>
            </div>
            <div>
              <h3 className="mt-0 text-base font-semibold">Bản chất</h3>
              <p>
                Nhà nước không trung lập. Theo Mác‑Lênin, nhà nước là sản phẩm lịch sử của mâu thuẫn giai cấp và là công cụ bảo đảm quyền lợi của giai cấp thống trị. <em>(Marx/Engels — trật tự dựa trên sở hữu; Lenin — công cụ chuyên chính của giai cấp.)</em>
              </p>
              <p className="text-foreground/80">Tính giai cấp và tính xã hội đồng thời tồn tại: vừa phục vụ lợi ích giai cấp thống trị, vừa thực hiện các chức năng chung của xã hội.</p>
            </div>
          </div>
        </Section>

        <Section id="phan-loai" icon={Layers} title="Phân loại ngắn theo lịch sử" variant="glass">
          <Timeline
            items={[
              { title: "Nhà nước nô lệ", content: "Phản ánh quan hệ sở hữu nô lệ và lợi ích chủ nô." },
              { title: "Nhà nước phong kiến", content: "Bảo vệ địa chủ, trật tự ruộng đất, tô thuế." },
              { title: "Nhà nước tư sản", content: "Bảo vệ quyền tư hữu của tư bản và quan hệ thị trường." },
            ]}
          />
          <p className="mt-2 text-sm text-foreground/70">Những nhà nước hiện đại có thể có phúc lợi rộng, nhưng không vì thế xoá bỏ bản chất giai cấp.</p>
        </Section>

        <Section id="hinh-thuc" icon={Layers} title="Hình thức nhà nước (từ góc độ Mác‑Lênin)" variant="elevated">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold">Hình thức chính thể</h4>
              <ul className="mt-2 space-y-1 text-foreground/80">
                <li>Quân chủ (tuyệt đối/lập hiến)</li>
                <li>Cộng hoà (tổng thống, đại nghị, hỗn hợp)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Cấu trúc lãnh thổ</h4>
              <ul className="mt-2 space-y-1 text-foreground/80">
                <li>Nhà nước đơn nhất</li>
                <li>Nhà nước liên bang</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Chế độ chính trị</h4>
              <ul className="mt-2 space-y-1 text-foreground/80">
                <li>Dân chủ (gắn với lợi ích giai cấp thống trị)</li>
                <li>Phi dân chủ/độc tài</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm text-foreground/70">Các hình thức biến đổi theo cơ sở kinh tế‑xã hội và tương quan giai cấp từng thời kỳ.</p>
        </Section>

        <Section id="bo-may" icon={Landmark} title="Bộ máy nhà nước và công cụ cưỡng chế" variant="outline">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border bg-card/60 p-4">
              <h5 className="text-sm font-semibold">Lập pháp</h5>
              <p className="mt-1 text-sm text-foreground/80">Ban hành pháp luật, thể chế hoá lợi ích giai cấp cầm quyền.</p>
            </div>
            <div className="rounded-xl border bg-card/60 p-4">
              <h5 className="text-sm font-semibold">Hành pháp</h5>
              <p className="mt-1 text-sm text-foreground/80">Tổ chức thực thi luật; quản lý kinh tế‑xã hội.</p>
            </div>
            <div className="rounded-xl border bg-card/60 p-4">
              <h5 className="text-sm font-semibold">Tư pháp</h5>
              <p className="mt-1 text-sm text-foreground/80">Xét xử, kiểm sát, bảo đảm trật tự pháp lý.</p>
            </div>
            <div className="rounded-xl border bg-card/60 p-4">
              <h5 className="text-sm font-semibold">Cưỡng chế</h5>
              <p className="mt-1 text-sm text-foreground/80">Quân đội, công an, nhà tù — bảo vệ trật tự và sở hữu thống trị.</p>
            </div>
          </div>
        </Section>

        <Section id="nha-nuoc-toan-dan" icon={Users} title="Giải thích khái niệm “nhà nước toàn dân”" variant="gradient">
          <Comparison
            labels={{ left: "Khẩu hiệu chính trị", right: "Nghĩa khoa học‑lý luận" }}
            a={["Hợp pháp hoá quyền lực", "Mở rộng ủng hộ", "Ngôn ngữ vận động"]}
            b={["Thể hiện lợi ích chung toàn xã hội", "Không xuất phát từ lợi ích giai cấp", "Điều kiện: xoá bỏ giai cấp"]}
          />
          <p className="mt-3 font-medium">Kết luận tạm: Trong xã hội còn giai cấp, nghĩa khoa học‑lý luận của “nhà nước toàn dân” là không thể đạt.</p>
        </Section>

        <Section id="vo-san" icon={Hammer} title="Nhà nước vô sản và nhiệm vụ chuyển tiếp" variant="glass">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p>
                Nhà nước vô sản (chuyên chính vô sản) là chính quyền của giai cấp công nhân trong thời kỳ chuyển tiếp lên CNCS; dùng quyền lực đàn áp phản kháng của giai cấp tư sản, xã hội hoá công cụ sản xuất, tổ chức lại xã hội.
              </p>
              <ul>
                <li>Nhiệm vụ kinh tế: cải tạo quan hệ sở hữu, xác lập nền tảng công hữu chủ yếu.</li>
                <li>Nhiệm vụ chính trị: củng cố liên minh công‑nông‑trí thức; mở rộng dân chủ cho đa số.</li>
                <li>Nhiệm vụ văn hoá‑xã hội: nâng cao dân trí, phúc lợi, tổ chức lại phân phối.</li>
              </ul>
            </div>
            <div>
              <p>
                Không phải “nhà nước của mọi giai cấp” mà là công cụ giai cấp để xoá nền tảng giai cấp. Khi giai cấp bị xoá bỏ, nhà nước dần tiêu vong — mới có thể có trật tự “toàn dân”.
              </p>
              <p className="text-foreground/80">Nguyên tắc tổ chức: dân chủ tập trung; kiểm soát xã hội đối với bộ máy; đấu tranh chống quan liêu.</p>
            </div>
          </div>
        </Section>

        <Section id="tieu-chi" icon={ListChecks} title="Tiêu chí nhận diện bản chất giai cấp của nhà nước" variant="outline">
          <CriteriaGrid
            points={[
              "Cơ cấu sở hữu: ai kiểm soát tư liệu sản xuất?",
              "Ai nắm quyền quyết định kinh tế‑chính trị?",
              "Quan hệ giữa bộ máy và lợi ích kinh tế?",
              "Ai kiểm soát quân đội, cảnh sát, an ninh — phục vụ ai?",
              "Luật pháp và thể chế bảo vệ lợi ích ai (thuế, phân phối, quyền tư hữu)?",
              "Kết quả phân phối: ai hưởng lợi (thu nhập, y tế, giáo dục)?",
            ]}
          />
          <p className="mt-2 text-foreground/80">Nếu đa phần tiêu chí phản ánh lợi ích của một giai cấp/nhóm lợi ích thì nhà nước đó mang bản chất giai cấp.</p>
          <p className="text-sm text-foreground/70">Tham khảo: Giáo trình Triết học Mác‑Lênin (2019, tr. 212–223) hoặc (2021, tr. 384–404); tiếng Anh: http://www.marxists.org/xlang/index.htm.</p>
        </Section>

        <Section id="vi-du" icon={BookOpen} title="Ví dụ minh hoạ ngắn" variant="elevated">
          <div className="grid gap-4 md:grid-cols-2">
            <TiltCard className="gradient-border rounded-2xl">
              <div className="glass dot-grid rounded-2xl p-5 shadow-sm">
                <h4 className="text-sm font-semibold">Cách mạng Pháp</h4>
                <p className="mt-1 text-foreground/80">Sự trỗi dậy của giai cấp tư sản; nhà nước tư sản hình thành để bảo vệ quan hệ sở hữu mới.</p>
              </div>
            </TiltCard>
            <TiltCard className="gradient-border rounded-2xl">
              <div className="glass rounded-2xl p-5 shadow-sm">
                <h4 className="text-sm font-semibold">Các nước tự nhận “xã hội chủ nghĩa”</h4>
                <p className="mt-1 text-foreground/80">Dù tuyên bố “toàn dân”, cần xem chính sách sở hữu và tổ chức quyền lực; nếu quyền sở hữu chủ yếu tư bản tư nhân hoặc một bộ phận lãnh đạo chiếm lợi ích, bản chất vẫn là giai cấp.</p>
              </div>
            </TiltCard>
          </div>
          <p className="mt-2 text-sm text-foreground/70">Chú ý: không đi sâu trường hợp cụ thể, chỉ minh hoạ phương pháp.</p>
        </Section>

        <Section id="phan-bien" icon={ShieldAlert} title="Phản biện các luận điểm phổ biến" variant="glass">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="a1">
              <AccordionTrigger>“Dân chủ đại diện = nhà nước của mọi giai cấp”</AccordionTrigger>
              <AccordionContent>
                Đại diện không tự động xoá bỏ mâu thuẫn kinh tế‑xã hội; quyền lực kinh tế có thể chi phối chính trị.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="a2">
              <AccordionTrigger>“Phúc lợi chứng tỏ nhà nước phục vụ mọi người”</AccordionTrigger>
              <AccordionContent>
                Phúc lợi có thể giảm xung đột nhưng nếu không thay đổi quan hệ sở h��u cơ bản thì không loại trừ bản chất giai cấp.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section id="ket-luan" icon={CheckCircle2} title="Kết luận" variant="gradient">
          <p className="text-base font-medium">
            Trong xã hội còn giai cấp, không tồn tại nhà nước trung lập hay nhà nước của mọi giai cấp. “Nhà nước toàn dân” ở nghĩa khoa học chỉ có thể đạt khi giai cấp bị xoá bỏ — tức là trong xã hội cộng sản, sau khi nhà nước truyền thống đã tiêu vong. Trong thời kỳ chuyển tiếp, nhà nước vô sản là nhà nước của giai cấp công nhân nhằm mục tiêu lịch sử loại bỏ giai cấp.
          </p>
        </Section>

        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-secondary/60 via-accent/40 to-primary/40 p-8 text-center shadow-sm">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] bg-[length:200%_100%] animate-shine" />
          <h3 className="text-2xl font-bold tracking-tight">Tài liệu & ghi chú</h3>
          <p className="mx-auto mt-2 max-w-2xl text-foreground/70">Xem Marxists.org và giáo trình Triết học Mác‑Lênin để đào sâu thêm. Bạn có thể dùng dàn ý trên để trình bày 12–18 phút.</p>
          <div className="mt-4">
            <a href="https://www.marxists.org/" target="_blank" rel="noreferrer">
              <Button variant="outline">Mở Marxists.org</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
